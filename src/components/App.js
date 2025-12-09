
import React, { createContext } from "react";
import './../styles/App.css';
import Auth from "./Auth";
import { AuthProvide } from "./AuthContext";

const App = () => {

  

  
  return (
    <div>
        {/* Do not remove the main div */}
        <h1>Click on the checkbox to get authenticated</h1>
       
       <AuthProvide>
           <Auth/>
       </AuthProvide>
        
    </div>
  )
}

export default App
