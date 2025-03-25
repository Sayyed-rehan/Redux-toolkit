import React from 'react'
import {useDispatch, useSelector} from 'react-redux'
import counterSlice from './redux/Slices/CounterSlice'
const actions = counterSlice.actions
const App = () => {

  const ass = useSelector((store)=>{
    return store.counterState.count
  })

  const dispatch = useDispatch()

  console.log('form ',ass)

  
  function handleInc(){
    console.log("increment will happen");
    console.log(actions.increment());
    dispatch(actions.increment(ass))
  }
  
  function handleDec(){
    dispatch(actions.decrement())

  }
  return (
    <div style={{height: '100vh', display:'flex', flexDirection:'column', justifyContent:'center'}}>
      
      
      
      
      
      
      
      <button onClick={handleInc}>INC</button>
      <h1>Hello from Redux {ass}</h1>
      <button onClick={handleDec}>DEC</button>

    </div>
  )
}

export default App