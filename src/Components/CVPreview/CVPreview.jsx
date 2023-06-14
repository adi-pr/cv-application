import React, { Component } from 'react'
import CVHeader from './CVHeader'
import CVContent from './CVContent'
import Sidebar from './Sidebar';


class CVPreview extends Component {
    render() { 
        const { cv } = this.props

        return ( 
            <div className='cvPreview '>
                <CVHeader personalInfo={cv.personalInfo} />
                <CVContent personalInfo={cv.personalInfo} experience={cv.experience} education={cv.education}/>
                <Sidebar personalInfo={cv.personalInfo} />
            </div>
         );
    }
}
 
export default CVPreview;