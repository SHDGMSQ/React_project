import React, {useEffect, useState} from 'react';
import s from './Clock.module.css';
import clockFace from './clockFace.png';
import clockMin from './min.png';
import clockSec from './sec.png';
import clockHours from './hours.png';

type ClockAnalogPropsType = {

}

export const ClockAnalog: React.FC<ClockAnalogPropsType> = () => {

    const [date, setDate] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            console.log('TICK');
            setDate(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId)
        }
    }, []);
    const secondStyle = {
        transform: `rotate(${date.getSeconds() * 6}deg)`
    };
    const minutesStyle = {
        transform: `rotate(${date.getMinutes() * 6}deg)`
    };
    const hoursStyle = {
        transform: `rotate(${date.getHours() * 30}deg)`
    };


    return <>
        <div className={s.clock}>
            <img src={clockFace} className={s.clockFace} alt="clockFace"/>
            <img src={clockMin} className={s.clockMin} alt="clockMin" style={minutesStyle}/>
            <img src={clockSec} className={s.clockSec} alt="clockSec" style={secondStyle}/>
            <img src={clockHours} className={s.clockHours} alt="clockSec" style={hoursStyle}/>
        </div>
    </>;
};