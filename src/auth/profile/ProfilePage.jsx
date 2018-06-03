import React, { Component } from 'react';
import connectStore from './connectStore';

class ProfilePage extends Component {
  componentWillMount() {
    this.props.requestGetProfile();
  }

  render() {
    const { user } = this.props;

    if (!user) {
      return null;
    }

    return (
      <div>
        <div>Name: {user.name}</div>
        <div>Email: {user.email}</div>
        <ul>
          {
            user.addresses.map(address => (
              <li key={address.type}>{address.type}: {address.value}</li>
            ))
          }
        </ul>
      </div>
    );
  }
}

export default connectStore(ProfilePage);
