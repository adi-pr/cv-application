import React, { Component } from 'react'
import Input from '../Utils/Input'
import FloatingLabel from 'react-bootstrap/FloatingLabel'
import { Form } from 'react-bootstrap'

class Personal extends Component {
    render() {
        const { personalInfo, onChange, onFileChange } = this.props
        return (
            <Form.Group className='personalContainer'>
                <Form.Label>Personal</Form.Label>
                <Input type="text" name="firstName" placeholder="First Name" onChange={(e) => onChange(e)} value={personalInfo.firstName} />

                <Input type="text" name="lastName" placeholder="Last Name" onChange={(e) => onChange(e)} value={personalInfo.lastName} />

                <Input type="text" name="title" placeholder="Title" onChange={(e) => onChange(e)} value={personalInfo.title} />

                <Input type="file" name="pfp" onChange={(e) => onFileChange(e)} />
    
                <Input type="text" name="address" placeholder="Address" onChange={(e) => onChange(e)} value={personalInfo.address} />

                <Input type="tel" name="phoneNumber" placeholder="Phone Number" onChange={(e) => onChange(e)} value={personalInfo.phoneNumber} />

                <Input type="email" name="email" placeholder="Email" onChange={(e) => onChange(e)} value={personalInfo.email} />

                <FloatingLabel
                    controlId="floatingTextarea"
                    label="Description"
                    className="mb-3"
                >
                    <Form.Control
                        as="textarea"
                        name="description"
                        placeholder="Description"
                        onChange={(e) => onChange(e)}
                        value={personalInfo.description}
                        style={{ height: '100px' }}
                    />

                </FloatingLabel>
            </Form.Group>
        );
    }
}

export default Personal;