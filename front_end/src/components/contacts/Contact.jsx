import React from 'react'

const Contact = ({name,content,icon}) => {
  return (
    <div className="contact">
      {icon}
      <h4>{name}</h4>
      <p className="contact-content">{content}</p>
    </div>
  );
}

export default Contact