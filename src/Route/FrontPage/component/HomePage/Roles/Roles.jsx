import "./Roles.css"
import { useEffect, useRef } from "react"
import { Svg } from "../../../svgs.jsx";
import { useState } from "react";


export const Roles = () => {
    const [circlex, setCircleX] = useState(0);
    const refCircle = useRef(null);
    const refButton = useRef(null);

    const [opacityHover, setOp] = useState(false);

    const opacityReset = (e) => {
        e.currentTarget.style = "";
    }
    
    const moveCircle = (e) => {
        
        let pos = e.currentTarget.getBoundingClientRect()
        let ppos = e.currentTarget.parentNode.getBoundingClientRect()
        setCircleX((pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (refCircle.current.getBoundingClientRect().width/2*100/ppos.width))
        setOp(true);
    };

    useEffect(() => {
        let pos = refButton.current.getBoundingClientRect()
        let ppos = refButton.current.parentNode.getBoundingClientRect()
        setCircleX((pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (refCircle.current.getBoundingClientRect().width/2*100/ppos.width))
    },[])
    
    return(
        <>
            <section className="roles">
                <div className="rolesBox">
                {/*utiliser flex*/}
                    <div style={{background:"blue", width:30+'%', height:90+'%'}}></div> 
                    <div style={{background:"red", width:40+'%', height:90+'%'}}></div>
                </div>

                <div className="listBox">
                    <div onAnimationEnd={() => {setOp(false)}} style={{left:`${circlex}%`}} className={"movingCircle"+(opacityHover ? " anim":"")} ref={refCircle}>
                        <Svg name="Circle"/>
                    </div>
                    <div className="catContainer">
                        <button ref={refButton} onMouseEnter={moveCircle} onMouseLeave={opacityReset}>
                            <Svg name="Assassins" />
                            <span>Assassins</span>
                        </button>
                        <button onMouseEnter={moveCircle} onMouseLeave={opacityReset}>
                            <Svg name="Combattants"/>
                            <span>Combattants</span>
                        </button>
                        <button onMouseEnter={moveCircle} onMouseLeave={opacityReset}>
                            <Svg name="Mages"/>
                            <span>Mages</span>
                        </button>
                        <button onMouseEnter={moveCircle} onMouseLeave={opacityReset}>
                            <Svg name="Tireurs"/>
                            <span>Tireurs</span>
                        </button>
                        <button onMouseEnter={moveCircle} onMouseLeave={opacityReset}>
                            <Svg name="Supports"/>
                            <span>Supports</span>
                        </button>
                        <button onMouseEnter={moveCircle} onMouseLeave={opacityReset}>
                            <Svg name="Tanks"/>
                            <span>Tanks</span>
                        </button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
