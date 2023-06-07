import React from 'react';
import EducationItem from './EducationItem';
import { Button, Form } from 'react-bootstrap/';

const Education = ({ education, onChange, onAdd, onDelete }) => {


  const educationArray = Object.values(education);

  const educationItems = educationArray.map((educationItem) => (
    <EducationItem
      key={educationItem.id}
      id={educationItem.id}
      educationItem={educationItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Form.Group className='educationContainer'>
      <Form.Label>Education</Form.Label>
      {educationItems}
      <Button variant="success" onClick={onAdd}>Add</Button>
    </Form.Group>
  );
};

export default Education;
