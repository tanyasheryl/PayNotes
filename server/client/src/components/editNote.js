import React, { Component } from 'react';
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
import { Link, withRouter } from 'react-router-dom';
import * as actions from '../actions';
class editNote extends Component {
  constructor(props) {
    super(props);
    this.updateNote = this.updateNote.bind(this);
  }
  componentDidMount() {
    this.setState({
      title: this.props.location.state.editnot.title,
      comment: this.props.location.state.editnot.comment,
      id: this.props.location.state.editnot._id
    });
  }
  updateNote(a, b, c) {
    console.log(this.props, b);
    this.props.editNote(b, this.props.history);
  }
  render() {
    const propvalue = this.props.location.state;
    //console.log(propvalue.editnot.comment);
    return (
      <div>
        <form>
          <label>Title</label>

          <input
            name="title"
            type="text"
            onChange={event => {
              this.setState({ title: event.target.value });
            }}
            defaultValue={propvalue.editnot.title}
          />
          <textarea
            name="comment"
            class="materialize-textarea"
            defaultValue={propvalue.editnot.comment}
            onChange={event => {
              this.setState({ comment: event.target.value });
            }}
          />

          <button
            onClick={this.updateNote.bind(null, 'formb', this.state)}
            className="teal btn-flat right btn-large white-text"
            type="button"
          >
            Update Note
          </button>
        </form>
      </div>
    );
  }
}
/*function mapStateToProps(state) {
  console.log(state, 'state');
  // return { formValues: state.form.editNote };
}
/*
editNote = reduxForm({
  form: 'editNote'
})(editNote);
editNote = connect(state => {
  console.log(state, 'state');
  return {
    initialValues: state //this.props.location.state
  };
}, actions)(editNote);
*/
export default connect(null, actions)(withRouter(editNote));
//export default editNote;
