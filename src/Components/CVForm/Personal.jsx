import React, { Component } from 'react'
import Input from '../Utils/Input'
import { Form } from 'react-bootstrap'

class Personal extends Component {
    render() {
        const { personalInfo, onChange } = this.props
        return (
            <div className='personalContainer'>
                <Form.Group className="mb-3">
                    <Input type="text" name="firstName" placeholder="First Name" onChange={(e) => onChange(e)} value={personalInfo.firstName} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="lastName" placeholder="Last Name" onChange={(e) => onChange(e)} value={personalInfo.lastName} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="title" placeholder="Title" onChange={(e) => onChange(e)} value={personalInfo.title} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="address" placeholder="Address" onChange={(e) => onChange(e)} value={personalInfo.address} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="tel" name="phoneNo" placeholder="Phone Number" onChange={(e) => onChange(e)} value={personalInfo.phoneNo} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="email" name="email" placeholder="Email" onChange={(e) => onChange(e)} value={personalInfo.email} />
                </Form.Group>
                
            </div>
        );
    }
}

export default Personal;