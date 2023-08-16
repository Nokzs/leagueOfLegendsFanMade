import "./Roles.css"
import { useRef } from "react"
import { Svg } from "../../../svgs.jsx";


export const Roles = () => {
   
    return(
        <>
            <section className="roles">
                <div className="rolesBox"></div>
                <div className="listBox">
                    <ul className="catContainer">
                        <li className="type">
                            <Svg name="Assassins" />
                        </li>
                        <li className="type">
                            <Svg name="Combattants"/>
                        </li>
                        <li className="type">
                            <Svg name="Mages"/>
                        </li>
                        <li className="type">
                            <Svg name="Tireurs"/>
                        </li>
                        <li className="type">
                            <Svg name="Supports"/>
                        </li>
                        <li className="type">
                            <Svg name="Tanks"/>
                        </li>
                    </ul>
                    <div className="movingCircle">
                        <Svg name="Circle"/>
                    </div>
                </div>
            </section>
        </>
    )
}
