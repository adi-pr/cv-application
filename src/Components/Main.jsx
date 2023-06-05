import React, { useState } from 'react'
import CVForm from './CVForm/CVFrom'
import CVPreview from './CVPreview/CVPreview'
import emptyCV from './Utils/emptyCV'

function Main() {

    const [cv, setCv] = useState(emptyCV)

     const handleChangePersonal = (e) => {
        const { name, value } = e.target;
        
        setCv((prevState) => ({
            ...prevState,
            personalInfo: {
                ...prevState.personalInfo,
                [name]: value,
            }
        }))
    }

    return ( 
        <>
            <CVForm cv={cv} handleChangePersonal={handleChangePersonal}/>
            <CVPreview cv={cv}/>
        </>
     );
}

export default Main;
