import { useEffect, useState } from "react"
import useRefreshToken from "../customHooks/useRefreshToken"
const RefreshToken = () => {
  const [isLoading, setIsLoading] = useState(true)
  const refreshToken = useRefreshToken()
  useEffect(() => {
    const refresh = async () => {
      await refreshToken()
      setIsLoading(false)
    }
    refresh()
  }, [])
  return <>{isLoading}</>
}
export default RefreshToken
