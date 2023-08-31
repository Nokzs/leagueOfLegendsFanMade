import {useState,useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const NewChamp = () =>{
    const [lastchamp,setChampions] = useState({})
   
    useEffect(()=>{
        fetch("http://ddragon.leagueoflegends.com/cdn/13.16.1/data/fr_FR/champion.json").then((res)=>res.json().then((data)=>{
            const champions = Object.entries(data.data);
            champions.sort((a,b)=> b[1].key - a[1].key)
            fetch(`http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/${champions[0][0]}.json`).then(response => response.json().then(((data)=>{
                setChampions(data.data);
            })));
        }));
    },[]);


   
    return(
        <div>
            {console.log(lastchamp)}
        </div>

    )
}


