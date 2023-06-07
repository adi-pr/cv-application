import React from 'react'
import List from '../Utils/List'

const EducationItem = ({ educationItem }) => {
    return (
        <div>
            <div>
                <p>
                    {educationItem.from} - {educationItem.to}
                </p>
                <section>
                    <List
                        title={`${educationItem.universityName}, ${educationItem.city}`}
                    >
                        <p>Degree: {educationItem.degree}</p>
                        <p>Subject: {educationItem.subject}</p>
                    </List>
                </section>
            </div>
        </div>
    );
}

export default EducationItem;