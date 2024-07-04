import React from "react"

export default function InputBox({label}){

    return(
        <>
            <div>
                <input type="checkbox" />
                <label>{label}</label>
            </div>
        </>
    )
}