import React from 'react';

export default props => {
  const heading = props.children;

  return (
  <h1 style={{fontFamily: 'Arial'}}>{heading}</h1>
  )
}
