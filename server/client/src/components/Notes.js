import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import DisplayNotes from './DisplayNotes';

class Notes extends Component {
  render() {
    return (
      <div>
        <DisplayNotes />
        <div class="fixed-action-btn">
          <Link to="/newNote" class="btn-floating btn-large red">
            <i class="large material-icons">add</i>
          </Link>
        </div>
      </div>
    );
  }
}
export default Notes;
