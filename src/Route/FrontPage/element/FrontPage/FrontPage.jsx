import { NavLink } from "react-router-dom"
import "./FrontPage.css"
import { useState } from "react";


export const FrontPage = ()=>{
    
    return(
        <div className="background">
           <video autoPlay muted className="background-video">
          <source src="src/Route/FrontPage/asset/a.mp4" type="video/mp4" />
         </video>
            <nav className="navLink">
                <li className="listlink">
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
            <div className="trailerContainer">
            <iframe className="trailer" width="560" height="315" src="https://www.youtube.com/embed/cXZqfuJ9Zps" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
            
        </div>
    )
}
