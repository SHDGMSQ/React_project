import React, {useEffect, useState} from 'react';

export default {
    title: 'components/UseEffect demo',
}



export const SimpleExample = () => {
    console.log("SimpleExample")

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)


    useEffect(() => {
        console.log('useEffect every render');
        document.title = counter.toString()
    })

    useEffect(() => {
        console.log('useEffect only first render (componentDidMount)');
        document.title = counter.toString()
    }, [])

    useEffect(() => {
        console.log('useEffect first render and every counter change');
        document.title = counter.toString()
    }, [counter])

        return <>
        <button onClick={() => setFake(fake + 1 )}>fake+</button>
        <button onClick={() => setCounter(counter + 1 )}>counter+</button>
        {counter}
    </>
}

export const SetTimeoutExample = () => {
    console.log("SetTimeoutExample")

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    const updateDate = () => {setDate(new Date().toLocaleTimeString())}

    useEffect(() => {

        setInterval( () => {
            updateDate()
        }, 1000 )

    }, [date])



        return <>
        {/*<button onClick={() => setFake(fake + 1 )}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1 )}>counter+</button>*/}
        Hello, counter: {date}
    </>
}

