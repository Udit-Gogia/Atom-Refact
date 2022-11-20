import { useState } from 'react'
import {TextComponent} from './login'
import {SignupModal} from '../components/Modals'
import {loginUser, signupUser} from '../components/authFunctions'
export default function Signup(){
    const [signupUsername , setSignupUsername] = useState('')
    const [signupPassword, setSignupPassword] = useState('')
    const [isOpen, setIsOpen] = useState(false)

    return (
         <div className="flex flex-col md:w-1/3 mx-auto border-2 rounded-md p-8 sm:w-full my-8">
            <form>
            <TextComponent label="username" name="inputUsername" value={signupUsername} stateMng={setSignupUsername} type="text" />
            <TextComponent label="password" name="loginPassword" value={signupPassword} stateMng={setSignupPassword} type="password" />   

            <button className="AuthButton"  onClick={async (e)=>{
                    e.preventDefault();
                    const res = await signupUser(signupUsername, signupPassword); 
                

                    if(res!=undefined){
                        console.log(res);
                        await loginUser(signupUsername, signupPassword);
                        setIsOpen(true)
                    }

            }}>signup</button>
            <SignupModal username={signupUsername} password={signupPassword} isOpen={isOpen}/>
            
            </form>
         </div>
    )
    
}