import React from "react"

export default function InputTask({label}){

    return(
        <>
            <input type="text" placeholder={label} className="col-12 mt-2 rounded-3 text-decoration-none border border-light"></input>
        </>
    )
}