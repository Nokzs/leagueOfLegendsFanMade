import { NavLink } from "react-router-dom"
import "./FrontPage.css"
import { useRef } from "react"


export const FrontPage = ()=>{

   
    return(
        <>
        <video autoPlay muted className="background-video">
            <source src="src/Route/FrontPage/asset/a.mp4" type="video/mp4" />
        </video>
        <div className="background">
            
            <nav className="navLink">
                <li className="listlink">
                    <ul >
                        <div className="buttonLink" >
                            <NavLink className={({isActive,isPending})=>isPending ? "pending":isActive? "active":""}to={"/"}>acceuil</NavLink>
                        </div>  
                    </ul>
                    <ul>
                        <div className="buttonLink">
                            <NavLink className={({isActive,isPending})=>isPending ? "pending":isActive? "active":""}to={"/champions/Aatrox"}>champions</NavLink>
                        </div>
                    </ul>
                    <ul>
                    <div className="buttonLink"><NavLink to={"/build"}>simulateur</NavLink></div>
                    </ul>
                </li>
            </nav>
            <div className="ButtonContainer">
                <button>
                    
                </button>
            </div>
        </div>
        </>
    )
}
