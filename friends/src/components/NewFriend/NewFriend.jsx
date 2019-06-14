import React from 'react';

class NewFriend extends React.Component {
  constructor() {
    super();
    this.state = {
      friend: {
        name: '',
        age: '',
        email: ''
      }
    };
  }
  addFriend = e => {
    e.preventDefault();
    this.props.addFriend(this.state.friend);
    this.setState({
      friend: {
        name: '',
        age: '',
        email: ''
      }
    });
  };

  handleChanges = e => {
    e.persist();
    this.setState(prevState => ({
      friend: {
        ...prevState.friend,
        [e.target.name]: e.target.value
      }
    }));
  };

  render() {
    return (
      <form onSubmit={this.addFriend}>
        <input
          type='text'
          placeholder='Name'
          value={this.state.friend.name}
          onChange={this.handleChanges}
          name='name'
        />
        <input
          type='number'
          placeholder='Age'
          value={this.state.friend.age}
          onChange={this.handleChanges}
          name='age'
        />
        <input
          placeholder='Email'
          value={this.state.friend.email}
          onChange={this.handleChanges}
          name='email'
        />
        <button>Add Friend</button>
      </form>
    );
  }
}

export default NewFriend;
