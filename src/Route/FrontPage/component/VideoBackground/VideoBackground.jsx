


export const VideoBackground = ({setIsStarted})=>{
    return(
    <>
        <video loop muted className="background-video">
            <source src="public/VideoBackground/VideoBackground.mp4" type="video/mp4" />
        </video>
        <div className="background">
            <div className="ButtonContainer" onClick={()=>{
                setIsStarted(true)
                sessionStorage.setItem("isStarted",true)
                }
            }>
                <button>
                    START
                </button>
            </div>   
        </div>
    </>
)}
