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
    <div>
      {experienceItems}
      <Button variant="success" onClick={onAdd}>Add</Button>
    </div>
  );
};

export default Experience;
