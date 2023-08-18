
import { useState } from "react"


export const useFetchChampions = ()=>{
    const url = "http://ddragon.leagueoflegends.com/cdn/13.16.1/data/fr_FR/champion.json"
    const [Champions,setChampions] = useState([]);
  
    fetch(url).then((res)=>res.json().then((data)=>{
        const champions  = Promise.all(Object.keys(data.data).map(async (name)=> fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${name}_0.jpg`)))
        
        setChampions(champions)
    }))
    
    return Champions

}