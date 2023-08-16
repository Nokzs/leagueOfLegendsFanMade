
import {useFile} from '../../../../../Hooks/UseFile'

export const Svg = ({url,style})=>{
    
   
    const {Data,Error,isLoading} =useFile(url)
  
    return(
        <>
          <img src={url}/>
        </>
    )
}