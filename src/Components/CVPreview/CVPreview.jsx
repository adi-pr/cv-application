import React, { Component } from 'react'
import CVHeader from './CVHeader'
import CVContent from './CVContent'


class CVPreview extends Component {
    render() { 
        const { cv } = this.props

        return ( 
            <div>
                <CVHeader personalInfo={cv.personalInfo} />
                <CVContent personalInfo={cv.personalInfo} experience={cv.experience} education={cv.education}/>
            </div>
         );
    }
}
 
export default CVPreview;