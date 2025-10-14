import { useState } from "react"

export const App = () => {
const handleButtonClick = () => {
  setClicked(clicked + 1)
}

const [clicked, setClicked] = useState(0)


  return (
    <>
      <h1>Hello!</h1>
      <div>This is amazing!</div>
      <button onClick={handleButtonClick} className="btn-secondary">Click me!</button>
      <div>Count: {clicked}</div>
    </>
  )
}
