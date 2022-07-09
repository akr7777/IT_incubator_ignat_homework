import React, {ChangeEvent, useState} from 'react'
import Message, {OneMessagePropsType} from "./Message"
import s from "./Message.module.css"


const myAvatar = 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'
const myName = "John Smith";

const messageDataInitialState: OneMessagePropsType[] = [{
    avatar: myAvatar,
    name: myName,
    message: 'some text',
    time: '22:00'
}]


function HW1() {

    const [messages, setMessages] = useState<OneMessagePropsType[]>(messageDataInitialState);
    const [newMsgTitle, setNewMsgTitle] = useState<string>('')

    const onChangeHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setNewMsgTitle(e.currentTarget.value)
    }

    const sendMessage = () => {
        let today = new Date();
        let currentTime:string = today.getHours().toString() + ":" + today.getMinutes().toString()
        let newMsgItem:OneMessagePropsType = {avatar: myAvatar, name: myName, message: newMsgTitle, time: currentTime};

        setMessages([...messages, newMsgItem])
        setNewMsgTitle('')
    }

    let renderingData = messages.map( (msg:OneMessagePropsType) => {
        return <Message
            avatar={msg.avatar}
            name={msg.name}
            message={msg.message}
            time={msg.time}
        />
    } );
    //console.log('renderingData=', renderingData)

    return (
        <div className={s.wrapped_div}>
            <hr/>
            homeworks 1

            {/*<Message
                avatar={messageData[0].avatar}
                name={messageData[0].name}
                message={messageData[0].message}
                time={messageData[0].time}
            />*/}

            {renderingData}

            <div className={s.new_msg_input_area}>
                <label>New message:</label>
                <textarea className={s.input_new_msg} id="new_msg_input" value={newMsgTitle} onChange={(e) => onChangeHandler(e) }/>
                <button className={s.new_msg_input_btn} onClick={sendMessage}>SEND</button>
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeMessage/>*/}
            <hr/>
        </div>
    )
}

export default HW1
