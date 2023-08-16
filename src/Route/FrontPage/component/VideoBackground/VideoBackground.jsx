


export const VideoBackground = ({setIsStarted})=>{
    return(
    <>
        <video autoPlay muted className="background-video">
            <source src="VideoBackground/VideoBackground.mp4" type="video/mp4" />
        </video>
        <div className="background">
            <div className="ButtonContainer" onClick={()=>setIsStarted((isStarted)=>!isStarted)}>
                <button>
                    START
                </button>
            </div>   
        </div>
    </>
)}
