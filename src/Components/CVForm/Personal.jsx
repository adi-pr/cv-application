import React, { Component } from 'react'
import Input from '../Utils/Input';
import { Form } from 'react-bootstrap';

class Personal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            title: '',
            address: '',
            phoneNo: '',
            email: '',
        }
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    }

    render() {
        const { firstName, lastName, title, address, phoneNo, email } = this.state
        return (
            <div className='personalContainer'>
                <Form.Group className="mb-3">
                    <Input type="text" name="firstName" placeholder="First Name" onChange={(e) => this.handleChange(e)} value={firstName} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="lastName" placeholder="Last Name" onChange={(e) => this.handleChange(e)} value={lastName} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="title" placeholder="Title" onChange={(e) => this.handleChange(e)} value={title} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="address" placeholder="Address" onChange={(e) => this.handleChange(e)} value={address} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="phoneNo" placeholder="Phone Number" onChange={(e) => this.handleChange(e)} value={phoneNo} />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input type="text" name="email" placeholder="Email" onChange={(e) => this.handleChange(e)} value={email} />
                </Form.Group>
                
            </div>
        );
    }
}

export default Personal;