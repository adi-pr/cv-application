import React from 'react';
import ExperienceItem from './ExperienceItem';
import {Form, Button} from 'react-bootstrap/';

const Experience = ({ experience, onChange, onAdd, onDelete }) => {


  const experienceArray = Object.values(experience);

  const experienceItems = experienceArray.map((experienceItem) => (
    <ExperienceItem
      key={experienceItem.id}
      id={experienceItem.id}
      experienceItem={experienceItem}
      onChange={onChange}
      onDelete={onDelete}
    />
  ));

  return (
    <Form.Group className='experienceContainer'>
      <Form.Label>Experience</Form.Label>
      {experienceItems}
      <Button variant="success" onClick={onAdd}>Add</Button>
    </Form.Group>
  );
};

export default Experience;
