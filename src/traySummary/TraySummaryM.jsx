import SubPage from "../subpage/SubPage"
import TraySummary from "./TraySummary"
const TraySummaryM = ({ totalItemCost }) => {
  return (
    <SubPage>
      <TraySummary totalItemCost={totalItemCost} />
    </SubPage>
  )
}
export default TraySummaryM
