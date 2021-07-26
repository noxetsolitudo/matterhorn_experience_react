import { React, useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import climbDB from './db/messagesBoardClimbDB.json';
import skiDB from './db/messagesBoardSkiDB.json';
import flyDB from './db/messagesBoardFlyDB.json';
import './App.scss';
import Main from './components/Main';
import Climb from './pages/Climb';
import Ski from './pages/Ski';
import Fly from './pages/Fly';
import MessagesBoard from './pages/MessagesBoard';

function App() {
  const [background, setBackground] = useState('wrapper');
  const [show, setShow] = useState(false);
  const [messagesClimbDB, setMessagesClimbDB] = useState(climbDB);
  const [messagesSkiDB, setMessagesSkiDB] = useState(skiDB);
  const [messagesFlyDB, setMessagesFlyDB] = useState(flyDB);

  const onSubmitClimb = ([author, content]) => {
    const obj = {
      author: author,
      content: content,
    };
    setMessagesClimbDB([...messagesClimbDB, obj]);
  };

  const onSubmitSki = ([author, content]) => {
    const obj = {
      author: author,
      content: content,
    };
    setMessagesSkiDB([...messagesSkiDB, obj]);
  };

  const onSubmitFly = ([author, content]) => {
    const obj = {
      author: author,
      content: content,
    };
    setMessagesFlyDB([...messagesFlyDB, obj]);
  };

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
              onSubmit={onSubmitClimb}
            />
          </Route>
          <Route path="/ski">
            <Ski
              show={show}
              close={() => setShow(false)}
              showPopup={() => {
                setShow(true);
              }}
              onSubmitSki={onSubmitSki}
            />
          </Route>
          <Route path="/fly">
            <Fly
              show={show}
              close={() => setShow(false)}
              showPopup={() => {
                setShow(true);
              }}
              onSubmitFly={onSubmitFly}
            />
          </Route>
          <Route path="/messages">
            <MessagesBoard
              messagesClimbDB={messagesClimbDB}
              messagesSkiDB={messagesSkiDB}
              messagesFlyDB={messagesFlyDB}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
