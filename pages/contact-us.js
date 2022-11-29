import {TextAreaComponent } from '../components/input'
import {IconAdd} from '../assets/images'
import { useState } from 'react';
export default function ContactUs(){

    const [description, setDescription] = useState('');
    const [image , setImage] = useState(IconAdd);
    return (
        <div className="w-full bg-neutral-100">

        <form className="md:w-1/2 flex flex-col gap-4 border-2 rounded-md p-4 mx-auto bg-white my-4">
            <p className="text-xl tracking-wide font-semibold mb-2 py-2 w-full border-b-2">Contact Us</p>

            <TextAreaComponent 
                    Name={"contactUsDescription"} 
                    value={description} 
                    stateMng={setDescription} 
                    placeholder={"please let us know how can we help you"} 
            />

            {/* <FileComponent accept={"image/*"} stateMng={setImage} image={image}/> */}
        </form>
        </div>
    )
}