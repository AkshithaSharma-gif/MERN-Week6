import {createContext} from 'react'
import { useState } from 'react'

//create context provider object
export const counterContextObj=createContext()

function ContextProvider({children}) {
    //state
    const [counter,setCounter]=useState(0)
    //functions to change state
    const ChangeCounterAdd=()=>{
        setCounter(counter+1)
    }
    const ChangeCounterSub=()=>{
        setCounter(counter-1)
    }

  return (
    <counterContextObj.Provider value={{counter,ChangeCounterAdd,ChangeCounterSub}}>
        {children}
    </counterContextObj.Provider>
  )
}

export default ContextProvider