import React from 'react'
import Input from "../Utils/Input"
import { Form, Button } from 'react-bootstrap'

const ExperienceItem = ({id, experienceItem, onChange, onDelete}) => {
    return (
        <>
            <Form.Group className='mb-3'>
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="position"
                    placeholder="Position"
                    value={experienceItem.position}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={experienceItem.company}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="city"
                    placeholder="City"
                    value={experienceItem.city}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="from"
                    placeholder="From"
                    value={experienceItem.from}
                />
            </Form.Group>

            <Form.Group className='mb-3'>
                <Input
                    onChange={(e) => onChange(e, id)}
                    type="text"
                    name="to"
                    placeholder="To"
                    value={experienceItem.to}
                />
            </Form.Group>
            <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
        </>
    );
}

export default ExperienceItem;