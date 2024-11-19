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
  const handleDecrease = () => {
    changeItemAmount.mutate({ mealId: id, amount: --amount })
  }
  const handleIncrease = () => {
    changeItemAmount.mutate({ mealId: id, amount: ++amount })
  }
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
          <section className=" amount-editor-section">
            <AmountEditor
              handleDecrease={handleDecrease}
              handleIncrease={handleIncrease}
              amount={amount}
            ></AmountEditor>
          </section>
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

export const AmountEditor = ({ handleIncrease, handleDecrease, amount }) => {
  return (
    <div className="amount-editor">
      <button onClick={handleDecrease} className="minus-button">
        <MinusIcon></MinusIcon>
      </button>
      <p style={{ color: "var(--primary--300)" }}>{amount}</p>

      <button onClick={handleIncrease} className="plus-button">
        <PlusIcon></PlusIcon>
      </button>
    </div>
  )
}
