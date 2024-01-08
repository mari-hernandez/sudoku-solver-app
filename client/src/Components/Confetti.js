import React, {useEffect, useState} from "react";
import ReactConfetti from 'react-confetti'

const Confetti = () => {
    const [windowDimensions, setWindowDimensions] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [showConfetti, setShowConfetti] = useState(true);
    
    const detectWindowResize = () => {
        setWindowDimensions({ width: window.innerWidth, height: window.innerHeight });
    }

    useEffect(() => {
        window.addEventListener('resize', detectWindowResize);
        return () => window.removeEventListener('resize', detectWindowResize);
    }, []);

    useEffect(() => {
        if(showConfetti){
            setTimeout(() => {
                setShowConfetti(false);
            }, 10000);
        }
    }, [showConfetti]);

    return (
        <div>
            {showConfetti && 
            <ReactConfetti
                width={windowDimensions.width}
                height={windowDimensions.height}
                tweenDuration={1000}
            />}
        </div>
    );
};

export default Confetti; 