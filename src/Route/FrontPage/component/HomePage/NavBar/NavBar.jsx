import "./NavBar.css"

import { NavLink } from "react-router-dom"
import logo from "../../../asset/circle.svg"
import icon from  "../../../asset/icon.svg"
import { Svg } from "./svg.jsx"

export const NavBar = () => {
   
    return(
        <>
        <nav className="navLink">
            <ul className="listlink">
                <li>
                <svg viewBox="0 0 100 100"><path d="M59.84,7.78,50,17.63,45.57,13.2,40.16,7.78a46.63,46.63,0,1,0,19.68,0Zm-12,12L50,22l2.2-2.19,4.67-4.67a38.86,38.86,0,1,1-13.74,0ZM50,96.89A43.52,43.52,0,0,1,39.18,11.21l2.59,2.59a40.42,40.42,0,1,0,16.46,0l2.59-2.59A43.52,43.52,0,0,1,50,96.89Z"></path><path d="M55.44,5.44,50,10.88,44.56,5.44,50,0Z"></path></svg>
                </li>
                <li>
                <Svg url={icon} style={{width:'50px',height:'100px'}}/>
                </li>
                <li>
                    <div className="buttonLink" >
                        <NavLink className={({isActive,isPending})=>isPending ? "pending":isActive? "active":""}to={"/"}>Accueil</NavLink>
                    </div>  
                </li>
                <li>
                    <div className="buttonLink">
                        <NavLink className={({isActive,isPending})=>isPending ? "pending":isActive? "active":""}to={"/champions/Aatrox"}>Champions</NavLink>
                    </div>
                </li>
                <li>
                    <div className="buttonLink"><NavLink to={"/build"}>Simulateur</NavLink></div>
                </li>
            </ul>
        </nav>
        </>
    )
}
