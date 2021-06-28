import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ blur, unblur }) => {
  return (
    <ul className="flex-row">
      <li>
        <Link
          to="/climb"
          onMouseEnter={blur}
          onMouseLeave={unblur}
          className="climb-color"
        >
          CLIMB
        </Link>
      </li>
      <li className="ski-color">
        <Link
          to="/ski"
          onMouseEnter={blur}
          onMouseLeave={unblur}
          className="ski-color"
        >
          SKI
        </Link>
      </li>
      <li className="fly-color">
        <Link
          to="/fly"
          onMouseEnter={blur}
          onMouseLeave={unblur}
          className="fly-color"
        >
          FLY
        </Link>
      </li>
    </ul>
  );
};

export default Navbar;
