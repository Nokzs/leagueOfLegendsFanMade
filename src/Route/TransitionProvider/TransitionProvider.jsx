import { useLocation, useOutlet } from "react-router-dom"
import { SwitchTransition,CSSTransition } from "react-transition-group"


export const TransitionProvider = ()=>{
    const child = useOutlet()
    const location = useLocation();
    
    return(
    <div>
    <SwitchTransition>
        <CSSTransition key={location.pathname}
        timeout={300} classNames={"page"}>
        <div className="page">
            {child}
        </div>
        </CSSTransition>
    </SwitchTransition>
       
    </div>)
}