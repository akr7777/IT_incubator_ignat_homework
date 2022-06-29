import React, {useState} from 'react'
import Affairs from './Affairs';
import s from "./Affairs.module.css"

// types
export type FilterType = 'all' | 'high' | 'middle' | 'low'
export type AffairType = {
    _id: number,
    name: string,
    priority: 'high' | 'middle' | 'low',
}
export type AffairsType = Array<AffairType>;

// constants
const defaultAffairs: AffairsType = [ // need to fix any
    {_id: 1, name: 'React', priority: 'high'},
    {_id: 2, name: 'anime', priority: 'low'},
    {_id: 3, name: 'games', priority: 'low'},
    {_id: 4, name: 'work', priority: 'high'},
    {_id: 5, name: 'html & css', priority: 'middle'},
]

// pure helper functions
export const filterAffairs = (affairs: AffairsType, filter: FilterType): AffairsType => {
    switch (filter) {
        case 'all':
            return affairs;
        case 'high':
            return affairs.filter(el => el.priority === filter);
        case 'middle':
            return affairs.filter(el => el.priority === filter);
        case 'low':
            return affairs.filter(el => el.priority === filter);
    }

}
export const deleteAffair = (affairs: AffairsType, _id: number): AffairsType => {
    return affairs.filter(el => el._id !== _id)
}

function HW2() {
    const [affairs, setAffairs] = useState<AffairsType>(defaultAffairs) // need to fix any
    const [filter, setFilter] = useState<FilterType>('all')

    const filteredAffairs = filterAffairs(affairs, filter)
    const deleteAffairCallback = (_id_td: number) => setAffairs(deleteAffair(affairs, _id_td)) // need to fix any

    return (
        <div className={s.wrapped_div}>
            <hr/>
            homeworks 2

            <div className={s.affairs_div}>
                <Affairs
                    data={filteredAffairs}
                    setFilter={setFilter}
                    deleteAffairCallback={deleteAffairCallback}
                />
            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeAffairs/>*/}
            <hr/>
        </div>
    )
}

export default HW2
