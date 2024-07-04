import React from "react"

export default function InputDescription({label}){

    return(
        <>
            <textarea type="text" placeholder={label}></textarea>
        </>
    )
}