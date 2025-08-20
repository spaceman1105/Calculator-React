import { useState } from "react"
import styles from "./App.module.css"
import { buttons } from "../data"

export default function App() {
  const [operand1, setOperand1] = useState("")
  const [operator, setOperator] = useState("")
  const [operand2, setOperand2] = useState("")
  const [resultShown, setResultShown] = useState(false)

  function handleDigitClick(digit) {
    if (!operator) {
      setOperand1((prev) => (resultShown ? digit : prev + digit))
      setResultShown(false)
    } else {
      setOperand2((prev) => prev + digit)
    }
  }

  function handleOperatorClick(oper) {
    if (oper === "C") {
      setOperand1("")
      setOperand2("")
      setOperator("")
      setResultShown(false)
    } else if (oper === "+" || oper === "-") {
      setOperator(oper)
      setResultShown(false)
    } else if (oper === "=") {
      const num1 = Number(operand1)
      const num2 = Number(operand2)
      let result
      if (operator === "+") result = num1 + num2
      else if (operator === "-") result = num1 - num2
      setOperand1(result.toString())
      setOperand2("")
      setOperator("")
      setResultShown(true)
    }
  }

  return (
    <div className={styles.calculator}>
      <div
        className={styles.display}
        style={{ color: resultShown ? "hsl(120, 60%, 40%)" : "white" }}
      >
        {operand1 || "0"}
        {operator}
        {operand2}
      </div>

      <div className={styles.buttons}>
        {buttons.map((btn) => (
          <button
            key={btn.label}
            onClick={() =>
              btn.type === "digit"
                ? handleDigitClick(btn.label)
                : handleOperatorClick(btn.label)
            }
            className={`${
              btn.type === "digit" ? styles.digit : styles.operator
            } ${btn.label === "0" ? styles.zero : ""} ${
              operator === btn.label ? styles.activeOperator : ""
            }`}
          >
            {btn.label}
          </button>
        ))}
      </div>
    </div>
  )
}
