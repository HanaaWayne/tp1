import React from "react"

export default function PriorityBox({label}){

    return(
        <>
            <input type="radio" name="drone" className="ms-3"></input>
            <label className="ms-1 text-light">{label}</label>
        </>
    )
}