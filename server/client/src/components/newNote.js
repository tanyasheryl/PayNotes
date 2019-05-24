import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../actions';

class newNote extends Component {
  submitNote = (a, b) => {
    console.log('add', b);
    this.props.addNote(b, this.props.history);
  };

  render() {
    //console.log(this.props);
    return (
      <div>
        <form
          onSubmit={this.props.handleSubmit(
            this.submitNote.bind(null, 'form_a')
          )}
        >
          <Field
            placeholder="Title"
            type="text"
            name="title"
            component="input"
          />
          <Field placeholder="Notes" name="comment" component="textarea" />
          <Link to="/notes" className="red btn-flat left btn-large white-text">
            Cancel
          </Link>
          <button
            className="teal btn-flat right btn-large white-text"
            type="submit"
          >
            Add Note
          </button>
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  //console.log(state, 'state');
  return { formValues: state.form.newNote };
}
newNote = reduxForm({ form: 'newNote' })(newNote);
export default connect(mapStateToProps, actions)(withRouter(newNote));
