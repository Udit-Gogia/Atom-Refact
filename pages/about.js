import { useState , useEffect} from "react";
import apiBase from "../components/apiBase";
import {checkPresence , CompanyCard} from '../components/cards'


export default function About(){

    const [about , setAbout ] = useState([])

    useEffect(()=>{
        
        async function fetchAbout(){    
            const { result } = await apiBase("GET", "public/read-box/1?type=about")

            checkPresence(result) && setAbout(result)
            return result;
        }

        fetchAbout();
    },[])



    const {title , description , media_url:media , link_url:link , tag:tags} = checkPresence(about) && about[0] 

    return (
        <div className="bg-neutral-100">
            {checkPresence(about) && <CompanyCard title={title} description={description} media={media} link={link} tags={tags} />}
        </div>
    )
}