import React from 'react'
import List from '../Utils/List';


const ExperienceItem = ({ experienceItem }) => {
    return (
        <div className='experienceItem'>
            <p>
                {experienceItem.from} - {experienceItem.to}
            </p>
                <List title={experienceItem.position}>
                    <div>
                        {experienceItem.company}, {experienceItem.city}
                    </div>
                </List>
        </div>
    );
}

export default ExperienceItem;