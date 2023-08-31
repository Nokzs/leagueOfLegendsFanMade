
import "./HomePage.css"
import { Roles } from "./Roles/Roles"
import { NavBar } from "./NavBar/NavBar"
import { NewChamp } from "./NewChamp/NewChamp"



export const HomePage =()=>{
    return(
        <div className="home">
            <div className="presentation">
                <NavBar/>
                <Roles/>
                <NewChamp/>
            </div>
        </div>        
    )
}