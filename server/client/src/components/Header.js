import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return <a href="/auth/google">Login with Google</a>;
      default:
        return [
          <li key="1">
            <a href="/newNote">Create Note</a>
          </li>,
          <li key="2">
            <a href="/logout">Logout</a>
          </li>
        ];
    }
  }
  render() {
    console.log(this.props.auth);
    return (
      <nav>
        <div class="nav-wrapper">
          <Link exact to={this.props.auth ? '/notes' : '/'} class="brand-logo">
            PayNotes
          </Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {this.renderContent()}
          </ul>
        </div>
      </nav>
    );
  }
}

function mapStateToProps({ auth }) {
  return { auth };
}
export default connect(mapStateToProps)(Header);
