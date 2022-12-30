import React from 'react'

const Service = ({ name, description ,basicIcon}) => {;
  return (
    <div className="service">
      {basicIcon}
      <h4>{name}</h4>
      <p>{description}</p>
    </div>
  );
};

export default Service