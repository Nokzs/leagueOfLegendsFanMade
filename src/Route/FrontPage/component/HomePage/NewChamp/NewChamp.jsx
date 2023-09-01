import {useState,useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const NewChamp = () =>{
    const [lastchamp,setLastChamp] = useState({})
   
    useEffect(()=>{
        fetch("http://ddragon.leagueoflegends.com/cdn/13.16.1/data/fr_FR/champion.json").then((res)=>res.json().then((data)=>{
            const champions = Object.values(data.data);
            const champion = champions.reduce((a, b) => a.key - b.key < 0 ? b : a)

            fetch(`http://ddragon.leagueoflegends.com/cdn/13.16.1/data/en_US/champion/${champion.id}.json`).then(response => response.json().then(((data)=>{
                setLastChamp(data.data);
            })));
        }));
    },[]);


   
    return(
        <section className="lastchamp">
            <div>
                {console.log(lastchamp)}
            </div>
        </section>
        

    )
}


