
import { NavBar } from "../FrontPage/component/HomePage/NavBar/NavBar"



import './champions.css'
import { Slider } from "./Component/slider/slider"
import { Outlet } from "react-router-dom"


export const Champions = ()=>{
    

   
 

   
           
    return(
       <> 
      <NavBar/>
        <div style={{backgroundColor:'white',width:'100vw',height:'100vh',display:"flex",justifyContent:'center',alignItems:'center',flexDirection:'column'}}> 
          <Slider/>
          <Outlet/>
        </div>
    </>
    )
}