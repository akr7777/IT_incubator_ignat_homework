import React from 'react'
import Affair from './Affair'
import {AffairsType, AffairType, FilterType} from './HW2';
import s from "./Affairs.module.css"

type AffairsPropsType = {
    data: AffairsType,
    setFilter: Function,
    deleteAffairCallback: (id_to_del: number) => void,
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}
            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setFilterPrority = (newPriority: FilterType) => {
        props.setFilter(newPriority);
    }

    return (
        <div>

            {mappedAffairs}
            <div className={s.filter_button_div}>
                <button onClick={() => {setFilterPrority('all')} }>All</button>
                <button onClick={() => {setFilterPrority('high')} }>High</button>
                <button onClick={() => {setFilterPrority('middle')} }>Middle</button>
                <button onClick={() => {setFilterPrority('low')} }>Low</button>
            </div>
        </div>
    )
}

export default Affairs
