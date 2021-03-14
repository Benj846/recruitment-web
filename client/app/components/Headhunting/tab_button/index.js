import React from 'react';
import './styles';

export default function Button(props) {
  return (
    <div className="Button_component">
      <button>press me {props.name}</button>
    </div>
  );
}
