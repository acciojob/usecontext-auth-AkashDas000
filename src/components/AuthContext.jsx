import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

export const AuthProvide = ({children}) => {

    const [isAuth, setIsAuth] = useState(false)

    const handleToggle = () => {
        setIsAuth((prev) => !prev)
    }

  return (
    <AuthContext.Provider value={{isAuth, handleToggle}}>
        {children}
    </AuthContext.Provider>
  )
}

