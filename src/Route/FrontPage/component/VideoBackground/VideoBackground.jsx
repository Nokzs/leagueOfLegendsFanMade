

// eslint-disable-next-line react/prop-types
export const VideoBackground = ({start})=>{
    return(
    <>
        <video autoPlay muted className="background-video">
            <source src="public/VideoBackground/VideoBackground.mp4" type="video/mp4" />
        </video>
        <div className="background">
            <div className="ButtonContainer" onClick={()=>start(true)}>
                <button>
                    START
                </button>
            </div>    
        </div>
    </>
)}