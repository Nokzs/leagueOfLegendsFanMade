import { useState} from "react"

export const useFile = (url)=>{
    const [Data,setData] = useState("")
    const [Error,setError] = useState("")
    const [isLoading,setIsLoading] = useState(true)
    fetch(url).then(response => response.blob().then(blob => {
        var reader = new FileReader();
        reader.onload = function() {
          setData(reader.result)
          setIsLoading(false)
        };
        reader.readAsText(blob);
       }))
       .catch(error => {
        setError(error)
        });

   return {Data,Error,isLoading}
}