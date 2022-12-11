import React, { createContext,useState } from 'react'
export const context = createContext();

export default function ContextProvide({children}) {
 const [user, setUser] = useState(localStorage.getItem("user")|| null)
 const perssistUser = (user) =>{
  setUser(user)
  localStorage.setItem("user",JSON.stringify(user))
 }
 const [level, setLevel] = useState(null)
 const [questions, setQuestions] = useState([])

  return (
    <context.Provider value={{user,perssistUser,questions,setQuestions,level, setLevel}} >
        {children}
    </context.Provider>
  )
}
