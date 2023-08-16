
import "./HomePage.css"
import { Roles } from "./Roles/Roles"
import { NavBar } from "./NavBar/NavBar"
import { useState } from "react"


export const HomePage =()=>{
    const [isStarted,setIsStarted] = useState(false);

    return(
        <div className="home">
            <NavBar/>
            <Roles/>
        </div>
        
        
    )
}