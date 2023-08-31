import {useState,useEffect} from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

export const Slider = () =>{
    const [Champions,setChampions] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    const navigate = useNavigate();
    const ChangeURL = (championsName)=>{
        navigate(`/champions/${championsName}`)
    }
   
    useEffect(()=>{
        fetch("http://ddragon.leagueoflegends.com/cdn/13.16.1/data/fr_FR/champion.json").then((res)=>res.json().then((data)=>{
            console.log(data.data)
            const fetchPromises = Object.keys(data.data).map(champion => fetch(`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champion}_0.jpg`).then(response => response.blob().then(((blob)=>{
            return{name:champion,url:URL.createObjectURL(blob),type:data.data[champion].tags }
            }))));
            Promise.all(fetchPromises).then(blobs=>{
                setChampions(blobs)
                setIsLoading(false);
            })
        })) 
    },[]);

   
    return(
        <div> 
            {isLoading && <p>chargement</p>} 
            {!isLoading &&
                <div className="slider-container">
                    <ul className="champ-picture-list">
                        {Champions.map(Champions=> 
                            <li key={Champions.name}>
                                <div className="champ-picture-container">
                                    <img className="champ-picture" onClick={()=>ChangeURL(Champions.name)} src={Champions.url}/>
                                    <p>{Champions.name}</p>
                                </div>
                            </li>
                            )
                        }
                    </ul>
                </div>
            }
        </div>

    )
}
