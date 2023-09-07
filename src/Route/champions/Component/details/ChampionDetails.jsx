import { useLocation, useParams } from "react-router-dom"



const usePromiseWithSuspense = (url)=>{
    const promise = fetch(url).then(res=>res.json);
    const reader = wrapPromise(promise)

    function wrapPromise(promise) {
      let status = 'pending';
      let response;
    
      const suspender = promise.then(
        res => {
          status = 'success';
          response = res;
        },
        err => {
          status = 'error';
          response = err;
        },
      );
    
      const handler = {
        pending: () => {
          throw suspender;
        },
        error: () => {
          throw response;
        },
        success: () => response
      };
    
      const read = () => {
        const result = handler[status];
        return result;
      };
    
      return { read };
    }
    return reader
}










export const ChampionDetails = ()=> {
    const {championsId} = useParams();
    const location = useLocation();
    const info = usePromiseWithSuspense(`http://ddragon.leagueoflegends.com/cdn/13.17.1/data/fr_FR/champion/${championsId}.json`)
    return(
     <>   
     
       </> 
    )
}