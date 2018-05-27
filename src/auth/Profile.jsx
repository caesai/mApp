import React, { Component } from 'react';
import { getProfile } from 'core/api';

class Profile extends Component {
  state = {
    user: null,
  };

  componentWillMount() {
    this.loadUser();
  }

  async loadUser() {
    const user = await getProfile();

    this.setState({ user });
  }

  render() {
    const { user } = this.state;

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

export default Profile;

