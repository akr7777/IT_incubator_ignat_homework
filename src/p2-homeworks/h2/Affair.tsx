import React from 'react';
import {AffairType} from "./HW2";
import s from "./Affairs.module.css";

type AffairPropsType = {
    // key не нужно типизировать
    affair: AffairType,
    deleteAffairCallback: (_id: number) => void,
}

function Affair(props: AffairPropsType) {
    const deleteCallback = (_id: number) => {
        props.deleteAffairCallback(_id);
    }

    return (
        <div key={props.affair._id} className={s.list_div}>
            - {props.affair.name}
            <button onClick={  () => {deleteCallback(props.affair._id)}  } className={s.delete_button}>X</button>
        </div>
    )
}

export default Affair
