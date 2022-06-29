import React from 'react'
import Message, {OneMessagePropsType} from "./Message"
import s from "./Message.module.css"

const myName = "John Smith";
const myAvatar = 'https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg'

type messageData = Array<OneMessagePropsType>

const messageData: messageData = [{
    avatar: myAvatar,
    name: myName,
    message: 'some text',
    time: '22:00'
}]

const sendMessage = () => {
    let newItem = {avatar: myAvatar, name: myName, message: 'some text222', time: '22:00'};
    messageData.push(newItem);
    HW1();
}


function HW1() {
    let renderingData = messageData.map( (msg:OneMessagePropsType) => {
        return <Message
            avatar={msg.avatar}
            name={msg.name}
            message={msg.message}
            time={msg.time}
        />
    } );
    console.log('renderingData=', renderingData)

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
                <textarea className={s.input_new_msg} id="new_msg_input"/>
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
