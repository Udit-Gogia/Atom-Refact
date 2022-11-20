import Image from "next/image"
import Link from 'next/link';
import { useEffect, useState } from "react"
import { LogoAtom } from '../assets/images/index'

export default function Header(){
    const [isAuth , setAuth] = useState(false)
    useEffect(()=>{
        const userDataObject = JSON.parse(localStorage.getItem('userData'));

        userDataObject?.hasOwnProperty('token') ? setAuth(true) : setAuth(false)
        
    })
    return (
        <div className="flex justify-between px-8 py-2 border-b-2   ">
            <div className="flex gap-2 items-center">
                <Image src={LogoAtom} alt="logo-atom.png" height={"40"} width={"40"} priority={true} style={{width: 'auto', height: 'auto'}}/>
                <p className="font-semibold text-xl">atom</p>
            </div>

            {!  isAuth && (
                <div className="flex gap-2 items-center">
                    <Link href='/login' className="btnStyle1">login</Link>
                    <Link  href='/signup' className="btnStyle2">signup</Link>
                   
                </div>
            )}

            
        </div>
    )
}