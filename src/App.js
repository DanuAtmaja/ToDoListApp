import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import Login from './components/auth/Login';
import Welcome from './components/todo/Welcome';
import ListTodos from './components/todo/ListTodos';
import PageNotFound from './components/PageNotFound';
import Header from './components/layouts/Header';
import Footer from './components/layouts/Footer';

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
                <Header />
                <Switch>
                  <Route exact path="/" component={Login} />
                  <Route path="/login" component={Login} />
                  <Route path="/welcome/:name" component={Welcome} />
                  <Route path="/todos" component={ListTodos} />
                  <Route component={PageNotFound} />
                </Switch>
                <Footer />
              </React.Fragment>
            </Router>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
