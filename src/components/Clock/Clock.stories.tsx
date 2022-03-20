import React, {useEffect, useState} from 'react';
import {Clock} from './Clock';

export default {
    title: 'components/Clock',
    component: Clock
}



export const BaseExample = () => {
    console.log("BaseExample")

    return <>
       <Clock/>
    </>
}
