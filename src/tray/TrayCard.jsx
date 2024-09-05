import { useQuery, useQueryClient } from "@tanstack/react-query"
import { PlusIcon, MinusIcon } from "../infra/icons"
import { useMutation } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
const TrayCard = ({
  mealAvatar: avatarUrl,
  mealName,
  amount,
  userMade = false,
  price,
  itemId: id,
}) => {
  const axios = useTokenizedAxios()
  const queryClient = useQueryClient()
  const changeItemAmount = useMutation({
    mutationFn: async (meal) => {
      axios
        .patch(
          `api/v1/tray/${meal.mealId}`,
          JSON.stringify({ quantity: meal.amount })
        )
        .then(() => {
          queryClient.invalidateQueries("tray")
        })
    },
  })
  const deleteMeal = useMutation({
    mutationFn: async (id) => {
      axios.delete(`/api/v1/tray/${id}`).then(() => {
        queryClient.invalidateQueries("tray")
      })
    },
  })
  return (
    <section
      key={id}
      className={!userMade ? "tray-card" : "tray-card  editable-tray-card"}
    >
      {avatarUrl && <img className="tray-card-avatar" src={avatarUrl} alt="" />}
      <div className="tray-card-div  ">
        <div>
          <p className="main-font-light">{mealName}</p>
          <p className="main-font-heavy">${price}</p>
          <div className="amount-editor-div">
            <button
              onClick={() => {
                changeItemAmount.mutate({ mealId: id, amount: --amount })
              }}
              className="minus-button"
            >
              <MinusIcon></MinusIcon>
            </button>
            <p style={{ color: "var(--primary--300)" }}>{amount}</p>

            <button
              onClick={() => {
                changeItemAmount.mutate({ mealId: id, amount: ++amount })
              }}
              className="plus-button"
            >
              <PlusIcon></PlusIcon>
            </button>
          </div>
        </div>
        <button
          className="tray-card-remove-btn"
          onClick={() => {
            deleteMeal.mutate(id)
          }}
        >
          <p>remove</p>
        </button>
      </div>
    </section>
  )
}
export default TrayCard
