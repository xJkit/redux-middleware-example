import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class UserList extends Component {

  componentWillMount() {
    this.props.fetchNothing();
    this.props.fetchUsers();
  }

  renderUsers(user, index) {
    return (
      <div className="card card-block" key={index}>
        <h4 className="card-title">{user.name}</h4>
        <p className="card-text">{user.email}</p>
        <a href="" className="btn btn-primary">Notify</a>
      </div>
    );
  }

  render() {
    const { users } = this.props
    return (
      <div className="user-list">
        {users.map(this.renderUsers)}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users
})

export default connect(mapStateToProps, {
  fetchUsers: actions.fetchUsers,
  fetchNothing: actions.fetchNothing
})(UserList);
