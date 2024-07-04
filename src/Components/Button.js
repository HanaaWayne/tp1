import React from "react"
import Button from 'react-bootstrap/Button';

export default function Buttons({label, className}){

    return(
        <>
            <Button type="button" className={className}>{label}</Button>
        </>
    )
}