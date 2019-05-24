import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNotes } from '../actions';
import editNote from './editNote.js';
import { Link } from 'react-router-dom';

class DisplayNotes extends Component {
  state = { editing: false };
  componentDidMount() {
    this.props.fetchNotes();
  }
  editeachNote(a, b) {
    return <editNote />;
    //console.log('clicking', b);
    //  console.log('checking', b);
  }

  renderNotes() {
    return this.props.notes.reverse().map(notes => {
      return (
        //  console.log(notes._id);
        <div class="card darken-1" key={notes._id}>
          <div class="card-content black-text">
            <span class="card-title">{notes.title} </span>
            <p>{notes.comment}</p>
          </div>
          <div class="card-action">
            <Link to={{ pathname: '/editNote', state: { editnot: notes } }}>
              Edit
            </Link>
          </div>
        </div>
      );
    });
  }
  render() {
    return <div>{this.renderNotes()}</div>;
  }
}

function mapStateToProps(state) {
  return { notes: state.notes };
}
export default connect(mapStateToProps, { fetchNotes })(DisplayNotes);
