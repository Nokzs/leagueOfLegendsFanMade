
import { NavBar } from "../FrontPage/component/HomePage/NavBar/NavBar"
import { useFetchChampions } from "../../Hooks/useFetchChampions"
import { useEffect, useState } from "react"
import { element } from "prop-types"

export const Champions = ()=>{
    const [Champions,setChampions] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    useEffect(()=>{
        fetch("http://ddragon.leagueoflegends.com/cdn/13.16.1/data/fr_FR/champion.json").then((res)=>res.json().then((data)=>{
            console.log(data)
            const fetchPromises = data.map(el => fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${el}_0.jpg`).then(response => response.blob()));
            const champion = Promise.all(fetchPromises).then(blobs=>blobs.map())
            
        
        }))
           
        },[]);
           
           
    return(
        <div style={{backgroundColor:'white',width:'100vw',height:'100vh'}}>
              <NavBar/>
              <ul>
              </ul>
        </div>
    )
}