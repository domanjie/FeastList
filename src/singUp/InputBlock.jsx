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
        placeholder=""
        onChange={handleChange}
      />
      <label htmlFor={id}>
        <p>{pText}</p>
        {ico}
      </label>
      <span className="err-span">{err}</span>
    </div>
  )
}
export default InputBlock
