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
                        width="560"
                        height="315"
                        src="https://www.youtube.com/embed/J3R8nNZFh6M?si=2Z1XVoYPQBe3Do1i"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowFullScreen
                    ></iframe>
                </div>
                <div className="mask" style={{ background: 'linear-gradient(45deg, rgba(29, 236, 197, 0.7), rgba(91, 14, 214, 0.7) 100%)' }}>
                <div className="container d-flex align-items-center justify-content-center text-center h-100">
                    <div className="text-white">
                        <h1 className="mb-3">Learn Bootstrap 5 with MDB</h1>
                        <h5 className="mb-4">Best & free guide of responsive web design</h5>
                        <a className="btn btn-outline-light btn-lg m-2" href="https://www.youtube.com/watch?v=c9B4TPnak1A" role="button" rel="nofollow" target="_blank">Start tutorial</a>
                        <a className="btn btn-outline-light btn-lg m-2" href="https://mdbootstrap.com/docs/standard/" target="_blank" role="button">Download MDB UI KIT</a>
                    </div>
                </div>
            </div>
            </div>
        </header>
    );
};

export default VideoHeader;
