import "./SubPage.css"
import Modal from "../modal/Modal"
import { useState } from "react"
const SubPage = ({ children }) => {
  return <section className="sub-page">{children}</section>
}
export default SubPage
