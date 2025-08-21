export default function handleDigitClick(
  digit,
  { operator, setOperand1, setOperand2, resultShown, setResultShown }
) {
  if (!operator) {
    setOperand1((prev) => (resultShown ? digit : prev + digit))
    setResultShown(false)
  } else {
    setOperand2((prev) => prev + digit)
  }
}