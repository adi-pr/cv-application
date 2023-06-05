import React from 'react'

const CVHeader = ({ personalInfo }) => {
    const { firstName, lastName, title } = personalInfo;

    return (
        <div>
            <h1> {firstName} {lastName} </h1>
            <p>{title}</p>
        </div>
    )
}

export default CVHeader;