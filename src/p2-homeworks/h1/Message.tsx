import React from 'react'
import s from "./Message.module.css"

export type OneMessagePropsType = {
    avatar: string,
    name: string,
    message: string,
    time: string
}

function Message(props: OneMessagePropsType) {
    return (
        <div className={s.message}>
            <div className={s.ava_img_div}>
                <img src={props.avatar} className={s.ava_img}/>
            </div>
            <div className={s.wwatchat}> {/*s.msg_div*/}
                <div>
                    <div className={s.name}>
                        {props.name}
                    </div>
                    <div className={s.text}>
                        {props.message}
                    </div>
                    <div className={s.time}>
                        {props.time}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Message
