import React from 'react'
import { Form, InputGroup } from 'react-bootstrap/';

const Input = ({ type, name, placeholder, onChange, value }) => {
    return (

        <InputGroup className='mb-3'>
            <Form.Control type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </InputGroup>
    )
}

export default Input;