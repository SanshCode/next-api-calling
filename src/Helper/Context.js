"use client"
import React, { createContext } from 'react'
export const MyContext = createContext()

const Context = ({children}) => {
    const userDecs = "This Is the text Decscription"
  return (
    <MyContext.Provider value={userDecs}>
        {children}
    </MyContext.Provider>
  )
}

export default Context