import React, { Component } from 'react'
import Personal from './Personal'
import Form from 'react-bootstrap/Form'
import Education from './Education'
import Experience from './Experience'
import FormActions from './FormActions'

class CVForm extends Component {
    render() {
        const { cv, handleChangePersonal, handleFileChange, handleChangeEducation, onAddEducation, onDeleteEducation, handleChangeExperience, onAddExperience, onDeleteExperience, generatePDF } = this.props
        return (
            <Form>
                <Personal personalInfo={cv.personalInfo} onChange={handleChangePersonal} onFileChange={handleFileChange} />
                <Education
                    education={cv.education}
                    onChange={handleChangeEducation}
                    onAdd={onAddEducation}
                    onDelete={onDeleteEducation}
                />
                <Experience
                    experience={cv.experience}
                    onChange={handleChangeExperience}
                    onAdd={onAddExperience}
                    onDelete={onDeleteExperience}
                />
                <FormActions
                    generatePDF={generatePDF}
                />
            </Form>
        );
    }
}

export default CVForm;