import { React, useState, useEffect } from 'react';
import './App.scss';
import Main from './components/Main';
import Climb from './pages/Climb';
import Ski from './pages/Ski';
import Fly from './pages/Fly';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  const [background, setBackground] = useState('wrapper');
  const [show, setShow] = useState(false);

  // useEffect(() => {
  //   setBackground('wrapper');
  // }, [<Climb />]);

  return (
    <Router>
      <div className="stack">
        <div className={background}></div>
        <Switch>
          <Route exact path="/">
            <Main
              blur={() => setBackground('wrapper wrapper-blured')}
              unblur={() => setBackground('wrapper')}
            />
          </Route>
          <Route path="/climb">
            <Climb
              show={show}
              close={() => setShow(false)}
              showPopup={() => {
                setShow(true);
              }}
              whatClass="climb"
            />
          </Route>
          <Route path="/ski">
            <Ski
              show={show}
              close={() => setShow(false)}
              showPopup={() => {
                setShow(true);
              }}
              whatClass="ski"
            />
          </Route>
          <Route path="/fly">
            <Fly
              show={show}
              close={() => setShow(false)}
              showPopup={() => {
                setShow(true);
              }}
              whatClass="fly"
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
