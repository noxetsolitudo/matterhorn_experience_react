import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ blur, unblur }) => {
  return (
    <ul className="flex-row footer">
      <Link to="#" onMouseOver={blur} onMouseLeave={unblur}>
        <li>where</li>
      </Link>
      <Link to="#" onMouseOver={blur} onMouseLeave={unblur}>
        <li>what</li>
      </Link>
      <Link to="#" onMouseOver={blur} onMouseLeave={unblur}>
        <li>when</li>
      </Link>
    </ul>
  );
};

export default Footer;
