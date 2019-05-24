import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Header from './Header';
import Notes from './Notes';
import newNote from './newNote';
import editNote from './editNote';
//const Header = () => <h2>Header</h2>;
const Login = () => (
  <h5>
    Paynotes - to create multiple notes. It has 3 components : Create Note, Edit
    note and View notes.
  </h5>
);
//const Notes = () => <h2>Notes</h2>;
class App extends Component {
  componentDidMount() {
    this.props.fetchUser();
  }
  render() {
    return (
      <div className="container">
        <BrowserRouter>
          <div>
            <Header />
            <Route exact path="/" component={Login} />
            <Route exact path="/notes" component={Notes} />
            <Route path="/newNote" component={newNote} />
            <Route path="/editNote" component={editNote} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default connect(null, actions)(App);
