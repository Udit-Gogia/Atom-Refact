import { useState } from 'react'
import {loginUser, setToken} from '../components/authFunctions'
import { useRouter} from 'next/router'
 
export const TextComponent = ({label , name , value , stateMng , type}) => {
    return (
        <div className="flex flex-col">
            <label htmlFor={name} className="font-semibold my-2">{label}</label>
            <input type={type} name={name} value={value} onChange={(e)=>stateMng(e.target.value)} required className="border-2 rounded-md p-2 my-2 focus:outline-[#191919]"></input>
        </div>
    )
}

export default function Login(){
    const router = useRouter();
    const [loginUsername , setLoginUsername] = useState('')
    const [loginPassword, setLoginPassword] = useState('')

    return (
        <div className="flex flex-col w-1/3 mx-auto border-2 rounded-md p-8 my-8">
            <form>

            <TextComponent label="username" name="inputUsername" value={loginUsername} stateMng={setLoginUsername} type="text" />
            <TextComponent label="password" name="loginPassword" value={loginPassword} stateMng={setLoginPassword} type="password" />   

            <button 
            className="AuthButton" 
            onClick={async (e)=>{
                e.preventDefault()
                const res = await loginUser(loginUsername, loginPassword) 

                if(res!=undefined){
                    router.push('/')
                }

            }}>
                login
            </button>
            </form>


            
           
        </div>
    )

}