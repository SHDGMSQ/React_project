import React, {useMemo, useState} from "react";

export default {
    title: 'components/UseMemo'
}

export const DifficultCounting = () => {

    const [a, setA] = useState<number>(0)
    const [b, setB] = useState<number>(0)


    let resultA = 1;
    let resultB = 1;

    resultA = useMemo( () => {
        let tempResultA = 1;
        for (let i = 1; i <= a; i++){
            let fake = 0;
            while (fake < 100000000) {
                fake++;
                const fakeValue = Math.random()
            }
            tempResultA = tempResultA * i
        }

        return tempResultA

    }, [a] )

    for (let i = 1; i <= b; i++){
        resultB = resultB *i
    }



    return <>
        <input value={a} onChange={ (e) => setA(Number(e.currentTarget.value)) }/>
        <input value={b} onChange={ (e) => setB(+e.currentTarget.value) }/>
        <hr/>
        <div>
            Result for a: {resultA}
        </div>
        <div>
            Result for b: {resultB}
        </div>
    </>
}

const UsersSecret = (props: { users: string[] }) => {
    console.log('Users Secret')
    return <div>{props.users.map((m, i) => <div key={i}>{m}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const HelpsToReactMemo = () => {
    console.log("HelpsToReactMemo")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const newArray = useMemo( () => {
        return users.filter( f => f.toLowerCase().indexOf("a") > -1 )
    },[users] )

        const addUser = () => {
        setUsers([...users, 'Sveta ' + new Date().getTime()])
        }

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        {counter}
        <Users users={newArray}/>
    </>
}

