import "./App.css"
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
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/restaurants" element={<Restaurants />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUP />} />
      </Routes>
    </>
  )
}

export default App
