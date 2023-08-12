import { NavLink } from "react-router-dom"
import "./FrontPage.css"

export const FrontPage = ()=>{
    return(
        <div className="background">
            <nav className="listLink">
                <li>
                    <ul>
                        <div className="buttonLink">
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
        </div>
    )
}
