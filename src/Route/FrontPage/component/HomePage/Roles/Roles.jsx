import "./Roles.css"
import { useEffect, useRef } from "react"
import { Svg } from "../../../svgs.jsx";
import { useState } from "react";


export const Roles = () => {
    const [circlex, setX] = useState(0);
    const refCircle = useRef(null);
    const refButton = useRef(null);
    const moveCircle = (e) => {
        let c = refCircle.current.getBoundingClientRect()
        let pos = e.currentTarget.getBoundingClientRect()
        let ppos = e.currentTarget.parentNode.getBoundingClientRect()
       
        
        setX((pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (c.width/2*100/ppos.width))
    };
    useEffect(()=>{
        let c = refCircle.current.getBoundingClientRect()
        let pos = refButton.current.getBoundingClientRect()
        let ppos = refButton.current.parentNode.getBoundingClientRect()
        setX((pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (c.width/2*100/ppos.width))
    },[])
    
    return(
        <>
            <section className="roles">
                <div className="rolesBox"></div>

                <div className="listBox">
                    <div  style={{left:`${circlex}%`}} className="movingCircle" ref={refCircle}>
                            <Svg name="Circle"/>
                    </div>
                    <div className="catContainer">
                        <button ref={refButton} onClick={moveCircle}>
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
