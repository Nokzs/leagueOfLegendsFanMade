
import "./HomePage.css"
import { useState } from "react"
import { Roles } from "./Roles/Roles"
import { NavBar } from "./NavBar/NavBar"
import { CSSTransition } from 'react-transition-group';

export const HomePage =()=>{
    const [isStarted,setIsStarted] = useState(false)
    
    return (
        <>
        <NavBar/>
        <Roles/>
        </>
    )
}