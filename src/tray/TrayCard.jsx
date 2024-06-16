import { useQuery, useQueryClient } from "@tanstack/react-query"
import { ChevronDown, ChevronUp, AdjustMentIcon, SaveMealIcon } from "../icons"
import { useMutation } from "@tanstack/react-query"
import useTokenizedAxios from "../customHooks/useTokenizedAxios"
import TraySummary from "./TraySummary"
const TrayCard = ({
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
      className={!userMade ? "tray-card" : "tray-card  editable-tray-card"}
    >
      {avatarUrl && <img className="tray-card-avatar" src={avatarUrl} alt="" />}
      <div className="tray-card-div small-grey-font ">
        <div>
          <p className="bold-title">{mealName}</p>
          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
            <img className="profile-ico-small" />
            <span>Glystin foods</span>
          </div>

          <p>{price}</p>
          <p
            style={{ color: "var(--primary--700)", opacity: "0.7" }}
            onClick={() => {
              deleteMeal.mutate(id)
            }}
          >
            remove
          </p>
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
export default TrayCard
