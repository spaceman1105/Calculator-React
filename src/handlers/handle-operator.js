export default function handleOperatorClick(
  oper,
  {
    setOperand1,
    operand1,
    setOperand2,
    operand2,
    setOperator,
    operator,
    setResultShown,
  }
) {
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
    else if (operand2 === "") result = num1
    setOperand1(result.toString())
    setOperand2("")
    setOperator("")
    setResultShown(true)
  }
}
