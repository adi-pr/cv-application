import React, { Component } from 'react'
import Personal from './Personal';
import Form from 'react-bootstrap/Form';

class CVForm extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <Form>
                <Personal />
            </Form>
         );
    }
}
 
export default CVForm;