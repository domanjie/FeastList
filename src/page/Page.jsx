import "./Page.css"
import { FeastList } from "../infra/icons"
import { useEffect, useRef } from "react"
export const Page = ({ children }) => {
  const pageRef = useRef()
  useEffect(() => {
    const page = pageRef.current
    const footer = page.querySelector("footer")
    const header = page.querySelector("header")
    footer.style[" transition"] = "opacity 0.3s ease-in-out"
    header.style["transition"] = "transform 0.3s ease-in-out"
    let ts
    const recordStartPosition = (e) => {
      ts = e.touches[0].clientY
    }
    const adjustHeader_Footer = (e) => {
      let te = e.changedTouches[0].clientY
      if (ts > te) {
        header.style["transform"] = "translateY(-100px)"
        footer.style["opacity"] = "0.7"
      } else {
        header.style["transform"] = "translateY(0px)"
        footer.style["opacity"] = "1"
      }
    }
    page.addEventListener("touchstart", recordStartPosition)
    page.addEventListener("touchmove", adjustHeader_Footer)
    return () => {
      page.removeEventListener("touchstart", recordStartPosition)
      page.removeEventListener("touchmove", adjustHeader_Footer)
    }
  }, [])

  return (
    <>
      <div ref={pageRef} id="page">
        <FeastList></FeastList>
        {children}
      </div>
      <div className="v-dem"></div>
    </>
  )
}
