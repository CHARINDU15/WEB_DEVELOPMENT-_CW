import React from 'react';
import TypingAnimation from '../../atoms/Typing';

const VideoHeader = () => {
    return (
        
        <header className="bg-dark text-white text-center py-5">
            <div className="container">
                <h1 className="display-3  font-weight-bold" ><TypingAnimation
            strings={['WELCOME TO EVENTO']}
            typeSpeed={50}
            backSpeed={30}
            startDelay={1000}
            backDelay={1000}
            loop={true}
          />
        </h1>
                <p className="lead  display-6">Where Imagination Meets Celebration!
</p>
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe
                        className="embed-responsive-item"
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/J3R8nNZFh6M?si=2Z1XVoYPQBe3Do1i"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                
            
            </div>
        </header>
    );
};

export default VideoHeader;
