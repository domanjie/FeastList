import { createContext, useState } from "react"
import "./Modal.css"
export const useModal = createContext()
const Modal = ({ setIsOpen, children }) => {
  return (
    <div onClick={() => setIsOpen(false)} className="modal">
      <div
        onClick={(e) => {
          e.stopPropagation()
        }}
      >
        {children}
      </div>
    </div>
  )
}
export default Modal
