import { useReducer } from "react"
import "./App.css"

function reducer(state,action){
  switch(action.type){
    case "INC_COUNT":
      return state+1
    case "DEC_COUNT":
      if(state===0) return state
      return state-1

  }
}
function App() {
  
  const [count,dispatch]=useReducer(reducer,0)

  
  const handleInc=()=>{
    dispatch({type:"INC_COUNT"})
  }
 const handleDec=()=>{
  dispatch({type:"DEC_COUNT"})
 }

  return (


    <>
    <p>count={count}</p>
     <button onClick={handleInc}>Inc</button>
     <button onClick={handleDec}>Dec</button>
    </>
  )
}

export default App
