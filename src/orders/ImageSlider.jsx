import { useState } from "react"
import { Circle, CircleDot } from "../icons"
const AvatarSlider = ({ setCurrent, images, current }) => {
  return (
    <div className="image-slider">
      {images.map((src, index) => (
        <img
          key={index}
          style={{
            width: "100%",
            minWidth: "100%",
            height: "100%",
            translate: `${-100 * current}%`,
            transition: "translate 300ms ease-in-out",
            objectPosition: "50% 50%",
            objectFit: "cover",
          }}
          src={src}
          alt=""
        />
      ))}

      <div className="image-slider-btns">
        {images.map((_, index) => (
          <button
            onClick={() => {
              setCurrent(index)
            }}
            key={index}
            style={{
              padding: "1px",
            }}
          >
            {index === current ? <CircleDot /> : <Circle />}
          </button>
        ))}
      </div>
    </div>
  )
}
export default AvatarSlider
