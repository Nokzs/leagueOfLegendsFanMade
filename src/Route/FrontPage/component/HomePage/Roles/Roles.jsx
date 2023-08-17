import "./Roles.css"
import { useRef } from "react"
import { Svg } from "../../../svgs.jsx";
import { useState } from "react";


export const Roles = () => {
    const [circlex, setX] = useState(0);

    const moveCircle = (e) => {
        let c = document.querySelector(".movingCircle").getBoundingClientRect()
        let pos = e.currentTarget.getBoundingClientRect()
        let ppos = e.currentTarget.parentNode.getBoundingClientRect()
        
        console.log((c.width/2))
        setX((pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (c.width/2*100/ppos.width))
    };


    return(
        <>
            <section className="roles">
                <div className="rolesBox"></div>

                <div className="listBox">
                    <div style={{left:circlex+"%"}} className="movingCircle">
                            <Svg name="Circle"/>
                    </div>
                    <div className="catContainer">
                        <button onClick={moveCircle}>
                            <Svg name="Assassins" />
                            <span>Assassins</span>
                        </button>
                        <button onClick={moveCircle}>
                            <Svg name="Combattants"/>
                            <span>Assassins</span>
                        </button>
                        <button onClick={moveCircle}>
                            <Svg name="Mages"/>
                            <span>Assassins</span>
                        </button>
                        <button onClick={moveCircle}>
                            <Svg name="Tireurs"/>
                            <span>Assassins</span>
                        </button>
                        <button onClick={moveCircle}>
                            <Svg name="Supports"/>
                            <span>Assassins</span>
                        </button>
                        <button onClick={moveCircle}>
                            <Svg name="Tanks"/>
                            <span>Assassins</span>
                        </button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
