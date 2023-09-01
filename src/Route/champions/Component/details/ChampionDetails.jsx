import { useLocation, useParams } from "react-router-dom"
import { CSSTransition } from "react-transition-group"
import { Suspense} from 'react';


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




const info = wrapPromise(fetch("https://jsonplaceholder.typicode.com/todos").then(data=>data.json()));


const Test = () => {
  
  const data = info.read();
  const response = data();
  return(<p>{response[0].id} blalalalalaldksfùkdgdgljl!</p>)
  
}

export const ChampionDetails = ()=> {
    const {championsId} = useParams();
    const location = useLocation();

    return(
     <>   
      <Suspense fallback={<div><p>j'attend</p></div>}>
          <Test/>
      </Suspense>
       </> 
    )
}