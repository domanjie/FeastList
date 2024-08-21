import { useQuery, useQueryClient } from "@tanstack/react-query"
import { PlusIcon, MinusIcon } from "../icons"
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
      <div className="tray-card-div sub-font ">
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
            <p>{amount}</p>

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
        <p
          style={{
            color: "var(--primary--700)",
            opacity: "0.7",
            alignSelf: "flex-end",
          }}
          onClick={() => {
            deleteMeal.mutate(id)
          }}
        >
          remove
        </p>
      </div>
    </section>
  )
}
export default TrayCard
