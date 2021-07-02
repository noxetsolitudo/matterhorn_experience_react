import React from 'react';
import Navbar from './Navbar';
import Showcase from './Showcase';
import Footer from './Footer';

const Main = ({ blur, unblur }) => {
  return (
    <div>
      <div className="container flex flex-col">
        <div className="nav myb">
          <Navbar blur={blur} unblur={unblur} />
        </div>
        <div className="showcase">
          <Showcase />
        </div>
      </div>
      <div
        className="container container-footer"
        style={{ marginTop: '-3rem' }}
      >
        {/* ^ only way to move the footer up a bit */}
        <Footer blur={blur} unblur={unblur} />
      </div>
    </div>
  );
};

export default Main;
