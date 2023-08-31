
import { NavBar } from "../FrontPage/component/HomePage/NavBar/NavBar"



import './champions.css'
import { Slider } from "./Component/slider/slider"
import { Outlet } from "react-router-dom"


export const Champions = ()=>{
    

   
    return(
      <div className="champion-page"> 
        <NavBar/>
        <div style={{marginTop:'300px',display:"flex",flexDirection:'column',justifyContent:'center',alignItems:'center'}}>{/* permet de centré les truc */}
          <Slider/>
          <Outlet/>
        </div>
        
      </div>

     
    )
}