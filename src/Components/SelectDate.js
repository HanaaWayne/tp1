import React from "react"

export default function SelectDate({date}){
    
    return(
        <>
            <select>
                {date.map(e => <option>{e}</option>)}
            </select>
        </>
    )
}