import React from 'react';
import { Link } from 'react-router-dom';

const ButtonMailTo = ({ mailto, label }) => {
  return (
    <Link
      className='text-teal-500 underline'
      to='#'
      onClick={(e) => {
        window.location.href = mailto;
        e.preventDefault();
      }}
    >
      {label}
    </Link>
  );
};

export default ButtonMailTo;
