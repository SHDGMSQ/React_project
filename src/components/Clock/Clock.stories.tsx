import React from 'react';
import {Clock} from './Clock';
import {ClockAnalog} from './ClockAnalog';

export default {
    title: 'components/Clock',
    component: Clock, ClockAnalog
}



export const BaseExample = () => {
    console.log("BaseExample")

    return <>
       <Clock />
    </>
}
