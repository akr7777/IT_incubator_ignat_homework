import React, {ChangeEvent, useState} from 'react'
import Greeting from './Greeting'
import {UserType} from "./HW3";

type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
// уровень локальной логики
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>('')
    const [error, setError] = useState<string | null>(null)
    const [totalUsers, setTotalUsers] = useState<number>(0)

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setName(e.currentTarget.value)
    }
    const addUser = (name: string) => {
        name = name.trim()
        if (name !== '') {
            setTotalUsers(totalUsers+1)
            alert(`Hello `+name+'!')
            setName('')
        } else {
            setError('Required field')
        }

    }

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            error={error}
            totalUsers={totalUsers}
        />
    )
}

export default GreetingContainer
