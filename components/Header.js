import Image from "next/image"
import { useEffect, useState } from "react"
import {LogoAtom} from '../assets/images'
import {loginUser , signupUser} from './authFunctions'

export default async function Header(){
    
    const [isAuth , setAuth] = useState(false)
    useEffect(()=>{
        const userDataObject = JSON.parse(localStorage.getItem('userData'));

        if (userDataObject.token !=undefined && userDataObject.token) {
            setAuth(false);
        } else {
            setAuth(true)
        }
    })
    return (
        <div className="flex justify-between px-4 py-2">
            <div className="flex-auto">
                <Image src={LogoAtom} alt="logo-atom.png" height={"40"} width={"40"} />
                <p className="font-semibold text-xl">atom</p>
            </div>

            {isAuth && (
                <div className="flex gap-2">
                    <button onClick={loginUser}>login</button>
                    <button onClick={signupUser}>signup</button>
                </div>
            )}

            
        </div>
    )
}