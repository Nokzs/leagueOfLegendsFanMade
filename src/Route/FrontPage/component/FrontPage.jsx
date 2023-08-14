
import "./FrontPage.css"
import { useState } from "react"
import { VideoBackground } from "./VideoBackground/VideoBackground"
import { HomePage } from "./HomePage/HomePage"
import { CSSTransition } from 'react-transition-group';
export const FrontPage = ()=> {

    const [isStarted,setIsStarted] = useState(false)
    
    return(
        <>
        <CSSTransition in={!isStarted} timeout={300}>
            <VideoBackground start={setIsStarted} />
        </CSSTransition>
        
        <CSSTransition in={isStarted} timeout={300}>
            <HomePage/>
        </CSSTransition>
        </>
    )
}
