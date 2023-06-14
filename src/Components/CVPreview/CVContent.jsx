import React from 'react'

import ExperienceItem from './ExperienceItem'
import EducationItem from './EducationItem'


const Content = ({ personalInfo, experience, education }) => {

    const experienceItems = experience.map((experienceItem) => (
        <ExperienceItem key={experienceItem.id} experienceItem={experienceItem} />
    ));
    const educationItems = education.map((educationItem) => (
        <EducationItem key={educationItem.id} educationItem={educationItem} />
    ));

    return (
        <div className='cvContent'>
            <section className='description'>
                <p className='header'>Description</p>
                <div>{personalInfo.description}</div>
            </section>
            <section className='educationItems'>
                <p className='header'>Education</p>
                <div>{educationItems}</div>
            </section>
            <section className='experienceItems'>
                <p className='header'>Experience</p>
                <div>{experienceItems}</div>
            </section>
        </div>
    );
}

export default Content;