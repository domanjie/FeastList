import "./App.css"
import AuthRequired from "./auth/AuthRequired"
import EmailVerification from "./singUp/EmailVerificationPage"
import {
  Tray,
  Home,
  OrderPage,
  VendorPage,
  SearchPage,
  SignUP,
  Login,
  NotFoundPage,
} from "./pages"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      {/* <EmailVerification></EmailVerification> */}
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route element={<AuthRequired />}>
          <Route path="/" element={<Home />} />
          <Route path="/tray" element={<Tray />} />
          <Route path="/vendors" element={<VendorPage />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Route>
        <Route path="/*" element={<NotFoundPage />}></Route>
      </Routes>
    </>
  )
}

export default App
