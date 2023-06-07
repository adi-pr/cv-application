import React, { Component } from 'react'
import Input from '../Utils/Input'
import { Form } from 'react-bootstrap'

class Personal extends Component {
    render() {
        const { personalInfo, onChange } = this.props
        return (
            <Form.Group className='personalContainer'>
                <Form.Label>Personal</Form.Label>
                <Input type="text" name="firstName" placeholder="First Name" onChange={(e) => onChange(e)} value={personalInfo.firstName} />

                <Input type="text" name="lastName" placeholder="Last Name" onChange={(e) => onChange(e)} value={personalInfo.lastName} />

                <Input type="text" name="title" placeholder="Title" onChange={(e) => onChange(e)} value={personalInfo.title} />

                <Input type="text" name="address" placeholder="Address" onChange={(e) => onChange(e)} value={personalInfo.address} />

                <Input type="tel" name="phoneNo" placeholder="Phone Number" onChange={(e) => onChange(e)} value={personalInfo.phoneNo} />

                <Input type="email" name="email" placeholder="Email" onChange={(e) => onChange(e)} value={personalInfo.email} />
            </Form.Group>
        );
    }
}

export default Personal;