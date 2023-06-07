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
    <div>
      {educationItems}
      <Button variant="success" onClick={onAdd}>Add</Button>
    </div>
  );
};

export default Education;
