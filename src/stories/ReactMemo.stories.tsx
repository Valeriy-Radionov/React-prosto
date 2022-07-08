import React, {ChangeEvent, useRef, useState} from 'react';


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export

export default {
    title: 'ReactMemo',
}
const NewMessagesCounter = (props: { count: number }) => {
   return <div>{props.count}</div>
}
const UsersSecret = (props: {users:Array<string>}) => {
    console.log("USERS")
    return (
        <div>{props.users.map((u,i) => <div key={i}>{u}</div>)}</div>
            )
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
    const [count, setCount] = useState(0)
    const [users, setUsers] = useState(["Kiril", "Artem", "Gnom"])
    const addUser = () => {
        const newUser = [...users,("Sveta" + new Date().getTime())]
        setUsers(newUser)
    }
return <>

    <button onClick={() => {setCount(count + 1)}}>+</button> //с перерисовкой
    <button onClick={addUser}>ADD</button> // без перерисовки

    <NewMessagesCounter count={count}/>
    <Users users={users}/>
</>
}