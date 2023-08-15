
import "./HomePage.css"

import { Roles } from "./Roles/Roles"
import { NavBar } from "./NavBar/NavBar"
import { CSSTransition } from 'react-transition-group';
import { useState } from "react"

export const HomePage =()=>{
    const [isStarted,setIsStarted] = useState(false);
    
    return (
        <>
        <NavBar/>
        <Roles/>
        </>
    )
}