import React from 'react'
import List from '../Utils/List'

const EducationItem = ({ educationItem }) => {
    return (
            <div className='educationItem'>
                <p>
                    {educationItem.from} - {educationItem.to}
                </p>
                    <List
                        title={`${educationItem.universityName}, ${educationItem.city}`}
                    >
                        <div>Degree: {educationItem.degree}</div>
                        <div>Subject: {educationItem.subject}</div>
                    </List>
            </div>
    );
}

export default EducationItem;