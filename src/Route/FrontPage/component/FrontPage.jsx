
import "./FrontPage.css"
import { useState } from "react"
import { VideoBackground } from "./VideoBackground/VideoBackground"
import { CSSTransition } from 'react-transition-group';
import { HomePage } from './HomePage/HomePage';
export const FrontPage = ()=>{

    const [isStarted,setIsStarted] = useState(false)

    console.log(isStarted)
    return(
        <>
            <CSSTransition unmountOnExit in={!isStarted} timeout={2000} classNames="fade">
                <VideoBackground setIsStarted={setIsStarted}  />
            </CSSTransition>
            <CSSTransition unmountOnExit in={isStarted} timeout={2000} classNames="fadeHomePage">
                <HomePage/>
            </CSSTransition>
        
        </>
    )
}
