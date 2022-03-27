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

export const SetIntervalExample = () => {
    console.log("SetTimeoutExample")

    const [fake, setFake] = useState(1)
    const [counter, setCounter] = useState(1)
    const [date, setDate] = useState(new Date().toLocaleTimeString())

    const updateDate = () => {setDate(new Date().toLocaleTimeString())}

    useEffect(() => {

        const intervalId = setInterval( () => {
            console.log('TICK');
            updateDate()
        }, 1000 )

    return () => {
            clearInterval(intervalId)
    }
    }, [])



        return <>
        {/*<button onClick={() => setFake(fake + 1 )}>fake+</button>*/}
        {/*<button onClick={() => setCounter(counter + 1 )}>counter+</button>*/}
        Hello, counter: {date}
    </>
}


export const ResetEffectExample = () => {


    const [counter, setCounter] = useState(1)

    console.log('Component rendered with ' + counter);

    useEffect(() => {
        console.log('Effect occurred ' + counter);

        return () => {
            console.log('RESET EFFECT ' + counter);
        }
        }, [counter])

    const increase = () => {setCounter(counter +1)}
        return <>
        Hello, counter: {counter} <button onClick={increase}>+</button>
    </>
}


export const KeysTrackerExample = () => {


    const [text, setText] = useState('')

    console.log('Component rendered with ' + text);

        useEffect( () => {
            const handler = (e: KeyboardEvent) => {
                console.log(e.key);
                setText(text + e.key)
            }
            window.document.addEventListener('keypress', handler)
            return () => {
                window.removeEventListener('keypress', handler)
                }
        }, [text])

        return <>
        Typed text: {text}
    </>
}

export const SetTimeoutExample = () => {


    const [text, setText] = useState('')

    console.log('Component rendered with ' + text);

        useEffect( () => {
            const timeoutId = setTimeout( () => {
                console.log('TIMEOUT EXPIRED');
                setText('3 seconds passed')
            }, 3000 )
            return () => {
                clearTimeout(timeoutId)
                }
        }, [text])

        return <>
        text: {text}
    </>
}

