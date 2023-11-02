import { useState } from "react"

const InputBlock = ({
  ico,
  className,
  pText,
  id,
  name,
  type,
  err,
  pattern,
  value,
  handleChange,
}) => {
  const [showErr, setShowErr] = useState(false)

  return (
    <div className={className || "form-block"}>
      <label htmlFor={id}>
        <p>{pText}</p>
        <img src={ico}></img>
      </label>
      <input
        type={type}
        id={id}
        name={name}
        required={true}
        onBlur={() => setShowErr(true)}
        showerr={showErr.toString()}
        onInput={() => setShowErr(false)}
        pattern={pattern}
        value={value}
        onChange={handleChange}
      />
      <span className="err-span">{err}</span>
    </div>
  )
}
export default InputBlock
