import React, {useState} from "react";

export default {
    title: 'components/React.Memo demo',
}

const NewMessagesCounterSecret = (props: {count: number}) => {
    return <div>{props.count}</div>
}
const NewMessagesCounter = React.memo(NewMessagesCounterSecret)

const UsersSecret = (props: { users: string[] }) => {
    console.log('Users')
    return <div>{props.users.map((m, i) => <div key={i}>{m}</div>)}</div>
}
const Users = React.memo(UsersSecret)

export const Example1 = () => {
    console.log("Example1")
    const [counter, setCounter] = useState(0)
    const [users, setUsers] = useState(['Dimych', 'Valera', 'Artem', 'Katya'])

    const addUser = () => {
        const copyUsers = [...users]
        copyUsers.push("Sveta " + new Date().getTime())
            setUsers(copyUsers)
    }

    return <>
        <button onClick={() => setCounter(counter+1)}>+</button>
        <button onClick={addUser}>add user</button>
        <NewMessagesCounter count={counter}/>
        <Users users={users}/>
    </>
}

