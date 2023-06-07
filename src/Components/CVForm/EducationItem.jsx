import React from 'react'
import Input from "../Utils/Input"
import { Form, Button } from 'react-bootstrap'

const EducationItem = ({id, educationItem, onChange, onDelete}) => {
    return (
        <>
                <Form.Group className="mb-3">
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="universityName"
                        placeholder="University name"
                        value={educationItem.universityName}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="city"
                        placeholder="City"
                        value={educationItem.city}
                    />
                </Form.Group>

                <Form.Group className="mb-3">
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="degree"
                        placeholder="Degree"
                        value={educationItem.degree}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={educationItem.subject}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="from"
                        placeholder="From"
                        value={educationItem.from}
                    />
                </Form.Group>
                <Form.Group className="mb-3">
                    <Input
                        onChange={(e) => onChange(e, id)}
                        type="text"
                        name="to"
                        placeholder="To"
                        value={educationItem.to}
                    />
                </Form.Group>
            <Button variant="danger" onClick={() => onDelete(id)}>Delete</Button>
        </>
    );
}

export default EducationItem;