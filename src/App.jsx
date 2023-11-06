import "./App.css"
import AuthRequired from "./auth/AuthRequired"
import {
  Cart,
  Home,
  OrderPage,
  Restaurants,
  SearchPage,
  SignUP,
  Login,
} from "./pages"
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUP />} />
        <Route element={<AuthRequired />}>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/search" element={<SearchPage />} />
          <Route path="/orders" element={<OrderPage />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
