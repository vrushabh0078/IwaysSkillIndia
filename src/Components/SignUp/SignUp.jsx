import React, { useState } from 'react'
import './SignUp.css'


const SignUp = () => {

    const [action,setAction] = useState("Sign Up");

  return (
    <div className="signUpPage">
        <div className="signUp">
            <div className="heading">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">
                {action === "Login" ? <div></div> : 
                    <div className="input">
                        <i class="fa-solid fa-user"></i>
                        <input type="text" placeholder='Enter your name'/>
                    </div>
                }
            
            <div className="input">
                <i class="fa-solid fa-envelope"></i>
                <input type="email" placeholder='Enter your E-mail'/>
            </div>
            <div className="input">
                <i class="fa-solid fa-lock"></i>
                <input type="password" placeholder='Enter Password'/>
            </div>
        </div>

            {action === "Sign Up" ? <div></div> :
                <div className="forgot-password">
                    Lost Password?
                <span> Click Here! </span>
                </div>
            }
        
        
        <div className="submit-signUpPage">
            <div className={action==="Login" ? "submit color" : "submit"} onClick={ () => {setAction("Sign Up")}}>
                Sign Up
            </div>
            <div className={action==="Sign Up" ? "submit color" : "submit"} onClick={ () => {setAction("Login")}}>
                Login
            </div>
        </div>
    </div>
  )
}

export default SignUp
