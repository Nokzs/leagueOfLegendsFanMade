import { NavLink } from "react-router-dom"



export const VideoBackground = ({setIsStarted})=>{
    return(
        <div>
    <video autoPlay muted className="background-video">
        <source src="public/VideoBackground/VideoBackground.mp4" type="video/mp4" />
    </video>
<div className="background">
    
    <nav className="navLink">
        <ul className="listlink">
            <li>
                <div className="buttonLink" >
                    <NavLink className={({isActive,isPending})=>isPending ? "pending":isActive? "active":""}to={"/"}>acceuil</NavLink>
                </div>  
            </li>
            <li>
                <div className="buttonLink">
                    <NavLink className={({isActive,isPending})=>isPending ? "pending":isActive? "active":""}to={"/champions/Aatrox"}>champions</NavLink>
                </div>
            </li>
            <li>
                <div className="buttonLink"><NavLink to={"/build"}>simulateur</NavLink></div>
            </li>
        </ul>
    </nav>
    <div className="ButtonContainer" onClick={()=>setIsStarted((isStarted)=>!isStarted)}>
        <button>
            START
        </button>
    </div>    
</div>
</div>
)
}