import { useEffect, useState } from 'react';
import classes from './styles/style.module.css';
import { useLocation } from 'react-router-dom';

const Starss = () => {
    const [videoLoaded, setVideoLoaded] = useState(false);
    const location = useLocation();
    const pathname = location.pathname;

    useEffect(() => {
        if (pathname === "/stars") {
            setVideoLoaded(false);
        }
    }, [pathname]);

    const handleVideoClick = (event: React.MouseEvent<HTMLVideoElement, MouseEvent>) => {
        const video = event.currentTarget as HTMLVideoElement;
        if (!videoLoaded) {
            setVideoLoaded(true);
            video.play();
        }
    };

    return (
        <div className={classes.stars_container}>
            <div className={classes.stars}>
                <div className={classes.stars_content}>
                    <h3>Bizi seçən Məşhurlar</h3>
                </div>
                <div className={classes.stars_video}>
                    <div className={classes.div_1}>
                        <video
                            src="/videos/WhatsApp%20Video%202024-08-24%20at%2013.24.53.mp4"
                            onClick={handleVideoClick}
                            controls
                        ></video>
                    </div>
                    <div className={classes.div_1}>
                        <video
                            src="/videos/WhatsApp%20Video%202024-08-24%20at%2013.24.57.mp4"
                            onClick={handleVideoClick}
                            controls
                        ></video>
                    </div>
                    <div className={classes.div_1}>
                        <video
                            src="/videos/WhatsApp%20Video%202024-08-24%20at%2013.25.00.mp4"
                            onClick={handleVideoClick}
                            controls
                        ></video>
                    </div>
                    <div className={classes.div_1}>
                        <video
                            src="/videos/video5362057010227467285.mp4"
                            onClick={handleVideoClick}
                            controls
                        ></video>
                    </div>
                    <div className={classes.div_1}>
                        <video
                            src="/videos/video5362057010227467290.mp4"
                            onClick={handleVideoClick}
                            controls
                        ></video>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Starss;
