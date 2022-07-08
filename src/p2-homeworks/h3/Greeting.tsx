import React from 'react'
import s from './Greeting.module.css'
import {ChangeEvent} from "react";

type GreetingPropsType = {
    name: string
    setNameCallback: (e: ChangeEvent<HTMLInputElement>) => void // need to fix any
    addUser: (name: string) => void
    error: string | null
    totalUsers: number
}

// презентационная компонента (для верстальщика)
const Greeting: React.FC<GreetingPropsType> = (
    {name, setNameCallback, addUser, error, totalUsers} // деструктуризация пропсов
) => {

    return (
        <div>
            <input value={name} onChange={e => setNameCallback(e)} className={error ? s.error : ""}/>
            <span className={error ? s.error_message : ""}>{error}</span>
            <button onClick={() => addUser(name)}>add</button>
            <span>{totalUsers}</span>
        </div>
    )
}

export default Greeting
