import React, { useContext } from 'react'
import { AuthContext } from './AuthContext'

const Auth = () => {

    const {isAuth, handleToggle} = useContext(AuthContext)

  return (
    <div>

        {
            isAuth ? <p>You are authenticated, you can proceed</p> : <p> You are not authenticated</p>
        }

        <label>
            <input type="checkbox" checked={isAuth} onChange={handleToggle} />
            I'm not a Robot
        </label>


    </div>
  )
}

export default Auth