import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ChevronDown, ChevronUp, AdjustMentIcon, SaveMealIcon } from "../icons"
import { useMutation } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
const TrayFoodCard = ({
  avatarUrl,
  mealName,
  amount,
  userMade = false,
  price,
  id,
}) => {
  const axios = useTokenizedAxios()
  const queryClient = useQueryClient()
  const changeItemAmount = useMutation({
    mutationFn: async (meal) => {
      axios.post("/api/v1/tray", JSON.stringify(meal))
    },
    onSuccess: () => {
      queryClient.invalidateQueries("tray")
    },
  })
  const deleteMeal = useMutation({
    mutationFn: async (id) => {
      axios.delete(`/api/v1/tray/${id}`)
    },
    onSuccess: () => {
      queryClient.invalidateQueries("tray")
    },
  })
  return (
    <section
      key={id}
      className={
        !userMade ? "cart-food-card" : "cart-food-card  editable-cart-food-card"
      }
    >
      {avatarUrl && <img src={avatarUrl} alt="" />}
      <div className="cart-food-card-div ">
        <div>
          <p>{mealName}</p>
          <p>{price}</p>
          <p
            onClick={() => {
              deleteMeal.mutate(id)
            }}
          >
            remove
          </p>
        </div>
        <div className="cart-food-card-div-secondChild">
          {userMade && (
            <>
              <button className="adjustment-button">
                <AdjustMentIcon />
              </button>
              <button className="saveMeal-button">
                <SaveMealIcon />
              </button>
            </>
          )}
        </div>

        <div className="amount-editor-div">
          <button
            onClick={() => {
              changeItemAmount.mutate({ mealId: id, amount: ++amount })
            }}
            className="chevronUp-button"
          >
            <ChevronUp />
          </button>
          <p>{amount}</p>
          <button
            onClick={() => {
              if (amount == 1) {
                deleteMeal.mutate(id)
              } else {
                changeItemAmount.mutate({ mealId: id, amount: --amount })
              }
            }}
            className="chevronDown-button"
          >
            <ChevronDown />
          </button>
        </div>
      </div>
    </section>
  )
}
export default TrayFoodCard
