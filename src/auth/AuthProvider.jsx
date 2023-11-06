import { createContext, useState } from "react"

const AuthenticationContext = createContext({})
export const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null)
  return (
    <AuthenticationContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthenticationContext.Provider>
  )
}
export default AuthenticationContext
