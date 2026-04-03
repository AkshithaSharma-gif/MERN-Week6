import React from 'react'
import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'

function Test() {
    const {counter1,changeCounter1}=useContext(counterContextObj)
    let newCounter1=useCounterStore((state)=>state.newCounter1)
    let incrementCounter1=useCounterStore((state)=>state.incrementCounter1)
    console.log("Test")

  return (
    <div>
      <h1 className='text-4xl'>Counter1:{counter1}</h1>
      <button onClick={changeCounter1} className='bg-gray-300 p-5'>+1</button>
      <h1 className='text-4xl'>newCounter1:{newCounter1}</h1>
      <button onClick={incrementCounter1} className='bg-gray-300 p-5'>+1</button>
    </div>
  )
}

export default Test