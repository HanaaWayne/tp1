import React from "react"

export default function InputBox({label}){

    return(
        <>
            <div>
                <input type="checkbox" />
                <label className="ms-2 text-light">{label}</label>
            </div>
        </>
    )
}