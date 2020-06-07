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
import Logout from './components/auth/Logout';

// utils Session Storage
import AuthServices from './components/utils/AuthServices';

// Styling React
import { Container, Row, Col } from 'reactstrap';

function App() {
  return (
    <div className="App">
      <Header />
      <React.StrictMode>
        <Container>
          <Row>
            <Col>
              <Router>
                <React.Fragment>
                  <Switch>
                    {!AuthServices.isUserLoggedIn && (
                      <Route exact path="/" component={Login} />
                    )}
                    {!AuthServices.isUserLoggedIn && (
                      <Route path="/login" component={Login} />
                    )}
                    {AuthServices.isUserLoggedIn && (
                      <Route path="/welcome/:name" component={Welcome} />
                    )}
                    {AuthServices.isUserLoggedIn && (
                      <Route path="/todos" component={ListTodos} />
                    )}
                    {AuthServices.isUserLoggedIn && (
                      <Route
                        path="/logout"
                        onClick={AuthServices.logout}
                        component={Logout}
                      />
                    )}
                    <Route component={PageNotFound} />
                  </Switch>
                </React.Fragment>
              </Router>
            </Col>
          </Row>
        </Container>
      </React.StrictMode>
      <Footer />
    </div>
  );
}

export default App;
