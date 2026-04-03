import {create} from 'zustand'

//create store

export const useCounterStore=create((set)=>({
    //state
    newCounter:0,
    newCounter1=100,
    //functions to increment decrement and reset
    incrementCounter:()=>set(state=>({newCounter:state.newCounter+1})),
    decrementCounter:()=>set(state=>({newCounter:state.newCounter-1})),
    incrementCounter1:()=>set(state=>({newCounter1:state.newCounter1})),
    reset:()=>set({newCounter:0}),


    
    //add user State(name,age,mail)
    user:{name:"ravi",email:"ravi@mail.com",age:21},
    //function to change email
    changeEmail:()=>set({...user,email:"ravi123@mail.com"}),
    //function to change name and age
    changeNameAge:()=>set({...user,name:"ravi sharma",age:30})


    

}));