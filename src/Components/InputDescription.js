import React from "react"

export default function InputDescription({label}){

    return(
        <>
            <textarea type="text" placeholder={label} className="col-12 mt-3 text-decoration-none rounded-3 border border-light"></textarea>
        </>
    )
}