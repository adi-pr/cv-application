import React from 'react'

import EducationItem from './EducationItem'


const Content = ({ personalInfo, education }) => {


    const educationItems = education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
    ));

    return ( 
        <div>
            <section>
                <div>{personalInfo.description}</div>
            </section>
            <section>
                {educationItems}
            </section>
        </div>
     );
}

export default Content;