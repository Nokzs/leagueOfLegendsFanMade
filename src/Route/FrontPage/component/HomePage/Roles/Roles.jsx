import "./Roles.css"
import { useEffect, useRef } from "react"
import { Svg } from "../../../svgs.jsx";
import { useState } from "react";
import { number } from "prop-types";

const pi = Math.PI

export const Roles = () => {
    const imgsRef = useRef(null);
    const backgroundsRef = useRef(null);
    const textsRef = useRef(null);

    const rolesRef = useRef([]);
    const refCircle = useRef(null);             // Ref Roles initiale
    const selectedRoles = useRef(0);

    function removeElements(target) {

        imgsRef.current.children[target].style.opacity = 0;
        backgroundsRef.current.children[target].style.opacity = 0;
        textsRef.current.children[target].style.opacity = 0;
    }
    function updateElements(target) {
        imgsRef.current.children[target].style.opacity = 1;
        backgroundsRef.current.children[target].style.opacity = 1;
        textsRef.current.children[target].style.opacity = 1;
    }


    function moveCircleY(target) {
        if (target.classList.contains("selectedRole")) {
            refCircle.current.style.transform = "translateY(-50%)";
            refCircle.current.classList.add("selectionCircle")
        } else {
            refCircle.current.style.transform = "translateY(-30%)";
            refCircle.current.classList.remove("selectionCircle")
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
            removeElements(selectedRoles.current);

            selectedRoles.current = e.currentTarget.getAttribute("data-key");
            updateElements(selectedRoles.current);
        }
        moveCircleY(e.currentTarget);
    }

    useEffect(() => {
       
        imgsRef.current.children[selectedRoles.current].style.opacity = 1;
        backgroundsRef.current.children[selectedRoles.current].style.opacity = 1;
        textsRef.current.children[selectedRoles.current].style.opacity = 1;

        rolesRef.current[selectedRoles.current].classList.add("selectedRole");
        moveCircleY(rolesRef.current[selectedRoles.current]);
        let pos = rolesRef.current[selectedRoles.current].getBoundingClientRect()
        let ppos = rolesRef.current[selectedRoles.current].parentNode.getBoundingClientRect()
        refCircle.current.style.left = (pos.x+(pos.width/2)-ppos.x)*100/ppos.width  - (refCircle.current.getBoundingClientRect().width/2*100/ppos.width)+"%";
    },[])
    
    return(
        <section className="roles">

            <div className="rolesBox">

                <div className="nameContainer">
                    <div className="textContainer" ref={textsRef}>
                        <div>
                            <span className="name">Akali</span>    
                            <span className="username">Assassins</span>
                        </div>
                        <div>
                            <span className="name">Yasuo</span>    
                            <span className="username">Combattants</span>
                        </div>
                        <div>
                            <span className="name">Lux</span>    
                            <span className="username">Mages</span>
                        </div>
                        <div>
                            <span className="name">Jinx</span>    
                            <span className="username">Tireurs</span>
                        </div>
                        <div>
                            <span className="name">Thresh</span>    
                            <span className="username">Supports</span>
                        </div>
                        <div>
                            <span className="name">Leona</span>    
                            <span className="username">Tanks</span>
                        </div>
                        <div>
                            <span className="name">Akali</span>    
                            <span className="username">Fighter</span>
                        </div>
                        
                    </div>
                    <div className="background-roles" ref={backgroundsRef}>
                        <Svg name="Assassins" />
                        <Svg name="Combattants"/>
                        <Svg name="Mages"/>
                        <Svg name="Tireurs"/>
                        <Svg name="Supports"/>
                        <Svg name="Tanks"/>
                    </div>
                    <div className="trail"></div>
                </div>
                <div className="champContainer">
                    <div className="canvasWrapper">
                        <div className="canvasContainer">
                            <CanvasCircle/>
                        </div>
                        <div className="imgContainer" ref={imgsRef}>
                            <img src="/images/assassin.png" alt="" />
                            <img src="/images/fighter.png" alt="" />
                            <img src="/images/mage.png" alt="" />
                            <img src="/images/marksman.png" alt="" />
                            <img src="/images/support.png" alt="" />
                            <img src="/images/tank.png" alt="" />
                        </div>
                    </div>
                </div>
                
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
    )
}
const RolesBox = () => {

    //selectedRoles.current = e.currentTarget.getAttribute("data-key");

    useEffect(() => {
        // rolesRef.current[selectedRoles.current].classList.add("selectedRole");
    },[])


}


const CanvasCircle = () => {
  const canvasRef = useRef(null);

  const n = 3
  const gap = pi/6
  const angle_arcs = (2*pi - gap*n)/n
  let start = 0
  let angle = 0;

  const MovingCanvasCircle = () => {
    const canvas = canvasRef.current;
    canvas.width = canvasRef.current.parentNode.getBoundingClientRect().width;
    canvas.height = canvasRef.current.parentNode.getBoundingClientRect().height;

    const radius = Math.min(canvas.width,canvas.height)/2 - 4;
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.strokeStyle = 'grey';
    ctx.lineWidth = 2
    ctx.beginPath();
    ctx.arc(canvas.width/2, canvas.height/2, radius, 0, 2*pi);
    ctx.stroke();
    ctx.strokeStyle = 'rgb(195, 144, 49)';
    ctx.lineWidth = 7
    ctx.lineCap = 'round';
    for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, radius, start+angle, start+angle_arcs+angle);
        ctx.stroke();
        start+=angle_arcs+gap;
    }

    angle += 0.005; // Vitesse de rotation
    requestAnimationFrame(MovingCanvasCircle);

 };

  useEffect(() => {
    let pp = canvasRef.current.parentNode.getBoundingClientRect();
    canvasRef.current.width = pp.width;
    canvasRef.current.height = pp.height;

    MovingCanvasCircle();
  }, []);

  return <canvas ref={canvasRef}/>;
};

