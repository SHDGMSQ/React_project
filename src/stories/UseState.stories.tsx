import React, {useMemo, useState} from 'react';

export default {
    title: 'components/UseState demo',
}

function generateData() {
    //difficult counting
    console.log('generateData');
    return 1
}

export const Example1 = () => {
    console.log("Example1")

    //const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    const changer = (state: number) => state + 1

        return <>
        <button onClick={() => setCounter(changer)}>+</button>
        {counter}
    </>
}

