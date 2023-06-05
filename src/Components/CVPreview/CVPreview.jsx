import React, { Component } from 'react'
import CVHeader from './CVHeader'

class CVPreview extends Component {
    render() { 
        const { cv } = this.props

        return ( 
            <div>
                <CVHeader personalInfo={cv.personalInfo} />
                
            </div>
         );
    }
}
 
export default CVPreview;