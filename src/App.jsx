import "./App.css"
import AuthRequired from "./auth/AuthRequired"
import BottomTabPage from "./bottomTabBar/BottomTabPage"
import EmailVerification from "./singUp/EmailVerificationPage"
import {
  Cart,
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
    // <>
    //   <Routes>
    //     <Route path="/login" element={<Login />} />
    //     <Route path="/sign-up" element={<SignUP />} />
    //     <Route element={<AuthRequired />}>
    //       <Route path="/" element={<Home />} />
    //       <Route path="/cart" element={<Cart />} />
    //       <Route path="/vendors" element={<VendorPage />} />
    //       <Route path="/search" element={<SearchPage />} />
    //       <Route path="/orders" element={<OrderPage />} />
    //     </Route>
    //     <Route path="/*" element={<NotFoundPage />}></Route>
    //   </Routes>
    // </>
    <>
      <EmailVerification></EmailVerification>
    </>
  )
}

export default App
