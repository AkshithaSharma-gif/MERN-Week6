import {useContext} from 'react'
import { counterContextObj } from '../contexts/ContextProvider'
import Test from './test'
import { useCounterStore } from '../../store/CounterStore' 
import { useState } from 'react'

function Home() {
  let newCounter=useCounterStore((state)=>state.newCounter)
  let incrementCounter=useCounterStore((state)=>state.incrementCounter)

  const {counter,changeCounter}=useContext(counterContextObj)
  console.log("Home")

  return (
    <div>
      <h1 className='text-4xl'>newCounter:{newCounter}</h1>
      <button onClick={incrementCounter} className='bg-gray-300 p-5'>+1</button>
      <h1 className='text-4xl'>Counter:{counter}</h1>
      <button onClick={changeCounter} className='bg-gray-300 p-5'>+1</button>
      <Test/>
    </div>
  )
}

export default Home