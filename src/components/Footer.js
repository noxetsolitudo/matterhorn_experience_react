import React from 'react';
import { Link } from 'react-router-dom';

const Footer = ({ blur, unblur }) => {
  return (
    <ul className="flex flex-row align-center footer">
      <Link to="/messages" onMouseOver={blur} onMouseLeave={unblur}>
        <li className="blured-bcg">Message board</li>
      </Link>
    </ul>
  );
};

export default Footer;
