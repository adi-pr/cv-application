import React, { Component } from 'react'
import Personal from './Personal';
import Form from 'react-bootstrap/Form';

class CVForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        const { cv, handleChangePersonal} = this.props
        return ( 
            <Form>
                <Personal personalInfo={cv.personalInfo} onChange={handleChangePersonal}/>
            </Form>
         );
    }
}
 
export default CVForm;