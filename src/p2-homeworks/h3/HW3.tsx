import React, {useState} from 'react'
import GreetingContainer from './GreetingContainer'
import {v1} from 'uuid';
import s from "../h2/Affairs.module.css";

// types
export type UserType = {
    _id: typeof v1
    name: string
}

// уровень работы с глобальными данными
function HW3() {
    const [users, setUsers] = useState<UserType[]>([]) // need to fix any

    const addUserCallback = (name: string) => {
        let newUser:UserType = {
            _id: v1,
            name: name,
        }
        setUsers([...users, newUser]) // need to fix
    }

    return (
        <div className={s.wrapped_div}>
            <hr/>
            homeworks 3
            <GreetingContainer users={users} addUserCallback={addUserCallback}/>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeGreeting/>*/}
            <hr/>
        </div>
    )
}

export default HW3
