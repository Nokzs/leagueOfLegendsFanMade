
import "./HomePage.css"
import { Roles } from "./Roles/Roles"
import { NavBar } from "./NavBar/NavBar"



export const HomePage =()=>{
    return(
        <div className="home">
            <NavBar/>
            <Roles/>
        </div>
    )
}