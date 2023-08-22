
import {CSSTransition, SwitchTransition } from "react-transition-group"

import {FrontPage} from '../FrontPage/component/FrontPage'
import {
    Route,
    
    Routes,
    useLocation,
  } from 'react-router-dom';
import { ChampionDetails } from "../champions/Component/details/ChampionDetails";
import {Champions} from "../champions/champions"

export const TransitionProvider = ()=>{ 
   const location = useLocation();
    return(
    <div>
        <SwitchTransition>
            <CSSTransition  
            timeout={2000} classNames={"page"} key={location.pathname.split("/")[1]}>
                    <Routes location={location} >
                        <Route 
                            path="/" element={<FrontPage/>}/>

                       <Route path="/champions/*" element={<Champions/>}>
                               <Route path=":championsId" element={<ChampionDetails/>}/>
                       </Route>
                    </Routes>
            </CSSTransition>
        </SwitchTransition>
    </div>
    )
}
