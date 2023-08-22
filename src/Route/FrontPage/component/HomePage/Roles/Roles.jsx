import "./Roles.css"
import { useEffect, useRef } from "react"
import { Svg } from "../../../svgs.jsx";
import { useState } from "react";


export const Roles = () => {
    const rolesRef = useRef([]);
    const refCircle = useRef(null);             // Ref Roles initiale
    const selectedRoles = useRef(0);

    function moveCircleY(target) {
        if (target.classList.contains("selectedRole")) {
            refCircle.current.style.transform = "translateY(-25%)";
        } else {
            refCircle.current.style.transform = "translateY(-7%)";
        }
    }
    const moveCircle = (e) => {
        let pos = e.currentTarget.getBoundingClientRect();
        let ppos = e.currentTarget.parentNode.getBoundingClientRect();
        refCircle.current.style.left = (pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (refCircle.current.getBoundingClientRect().width/2*100/ppos.width)+"%";
        moveCircleY(e.currentTarget);
    };

    const changeSelected = (e) => {
        if (e.currentTarget != rolesRef.current[selectedRoles.current]) { // Si nouveau boutton selectionné
            e.currentTarget.classList.add("selectedRole")
            rolesRef.current[selectedRoles.current].classList.remove("selectedRole")  // déselectionne l'ancien
            selectedRoles.current = e.currentTarget.getAttribute("data-key");
        }
        moveCircleY(e.currentTarget);
    }

    useEffect(() => {
        rolesRef.current[selectedRoles.current].classList.add("selectedRole");
        moveCircleY(rolesRef.current[selectedRoles.current]);
        let pos = rolesRef.current[selectedRoles.current].getBoundingClientRect()
        let ppos = rolesRef.current[selectedRoles.current].parentNode.getBoundingClientRect()
        refCircle.current.style.left = (pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (refCircle.current.getBoundingClientRect().width/2*100/ppos.width)+"%";
    },[])
    
    return(
        <>
            <section className="roles">
                <div className="rolesBox">
                {/*utiliser flex*/}
                    <div style={{background:"blue", width:30+'%', height:90+'%'}}></div> 
                    <div style={{background:"grey", width:40+'%', height:90+'%'}}></div>
                </div>

                <div className="listBox">
                    <div className="movingCircle" ref={refCircle}>
                        <Svg name="Circle"/>
                    </div>
                    <div className="catContainer">
                        <button data-key={0} ref={el => rolesRef.current[0] = el} onClick={changeSelected} onMouseEnter={moveCircle}>
                            <Svg name="Assassins" />
                            <span>Assassins</span>
                        </button>
                        <button data-key={1} ref={el => rolesRef.current[1] = el} onClick={changeSelected} onMouseEnter={moveCircle}>
                            <Svg name="Combattants"/>
                            <span>Combattants</span>
                        </button>
                        <button data-key={2} ref={el => rolesRef.current[2] = el} onClick={changeSelected} onMouseEnter={moveCircle}>
                            <Svg name="Mages"/>
                            <span>Mages</span>
                        </button>
                        <button data-key={3} ref={el => rolesRef.current[3] = el} onClick={changeSelected} onMouseEnter={moveCircle}>
                            <Svg name="Tireurs"/>
                            <span>Tireurs</span>
                        </button>
                        <button data-key={4} ref={el => rolesRef.current[4] = el} onClick={changeSelected} onMouseEnter={moveCircle}>
                            <Svg name="Supports"/>
                            <span>Supports</span>
                        </button>
                        <button data-key={5} ref={el => rolesRef.current[5] = el} onClick={changeSelected} onMouseEnter={moveCircle}>
                            <Svg name="Tanks"/>
                            <span>Tanks</span>
                        </button>
                    </div>
                    
                </div>
            </section>
        </>
    )
}
