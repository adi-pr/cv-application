import React from 'react'

const CVHeader = ({ personalInfo }) => {
    const { firstName, lastName, title } = personalInfo

    return (
        <div className='cvPreviewHeader'>
            <h1 className='name'> {firstName} {lastName} </h1>
            <p className='title'>{title}</p>
        </div>
    )
}

export default CVHeader;