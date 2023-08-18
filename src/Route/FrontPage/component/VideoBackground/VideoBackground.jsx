


export const VideoBackground = ({setIsStarted})=>{
    return(
    <>
        <video autoPlay loop muted className="background-video">
            <source src="VideoBackground/VideoBackground.mp4" type="video/mp4" />
        </video>
        <div className="background">
            <div className="ButtonContainer" onClick={()=>{
                setIsStarted(true)
                sessionStorage.setItem("isStarted",true)
                }
            }>
                <button color="white">
                    START
                </button>
            </div>   
        </div>
    </>
)}
