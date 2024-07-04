import React from "react"

export default function SelectDate({date, className}){
    
    return(
        <>
            <select className={className}>
                {date.map(e => <option>{e}</option>)}
            </select>
        </>
    )
}