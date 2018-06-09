import React from 'react';

export const TodoItem = (props) =>{
  const handleToggle = props.handleToggle.bind(null, props.id)
  return (
    <li key={props.id}>
      <input 
        type="checkbox" 
        onChange={handleToggle}
        checked={props.isComplete} 
        />
      {props.name}
    </li>
  )
}