import React from "react"
import { Link } from "gatsby"
import ReactPlayer from 'react-player/youtube'



const Trailer = () =>{
    return(
        <>
            <section className="book-trailer">
                <div className="grid-two-columns" id="trailer-body">
                    
                    <div className="grid-child-content">
                        <h5>Perry Defiore</h5>
                        <h1>
                            <span>Radio</span>
                            <span>Interviews</span>
                        </h1>
                        <p>
                            Just like how the story of the book goes, the process in writing it was also a journey. Hear about it from the author himself. Click the play button and learn more.
                        </p>
                        <Link to="/videos">
                            <button>See more videos here</button>
                        </Link>
                    </div>

                    <div className="grid-video-container">
                        <div className="player-wrapper">
                            <ReactPlayer
                                className="react-player"
                                url={"https://www.youtube.com/watch?v=s1g_Fy3mogg"}
                                width="100%"
                                height="400px"
                                controls={true}
                                playIcon
                            />
                        </div>
                    </div>
                
                </div> 
            </section>
        </>
    )
}

export default Trailer;