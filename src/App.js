import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
// import TodoApp from './components/todo/TodoApp';
import Login from './components/auth/Login';
import Welcome from './components/todo/Welcome';
import PageNotFound from './components/PageNotFound';

// Styling React
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col>
            <Router>
              <React.Fragment>
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/welcome" component={Welcome} />
                  <Route component={PageNotFound} />
                </Switch>
              </React.Fragment>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
