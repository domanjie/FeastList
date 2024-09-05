import { useState } from "react"
import { ExclamationIco } from "../infra/icons"
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
  validityChecker,
  handleKeydown,
  handleChange,
  maxLength,
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
        onKeyDown={handleKeydown}
        placeholder=""
        onChange={(e) => {
          handleChange && handleChange(e)
          validityChecker &&
            (validityChecker(e.target.value)
              ? e.target.setCustomValidity("")
              : e.target.setCustomValidity("Invalid field."))
        }}
        maxLength={maxLength}
      />
      <label htmlFor={id}>
        <p>{pText}</p>
        {ico}
      </label>
      {err && (
        <span className="err-span">
          <ExclamationIco></ExclamationIco>
          <p>{err}</p>
        </span>
      )}
    </div>
  )
}
export default InputBlock
