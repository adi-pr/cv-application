import React from 'react'
import Form from 'react-bootstrap/Form';

const Input = ({ type, name, placeholder, onChange, value }) => {
    return (

        <div>
            <Form.Control type={type} name={name} placeholder={placeholder} onChange={onChange} value={value} />
        </div>
    )
}

export default Input;