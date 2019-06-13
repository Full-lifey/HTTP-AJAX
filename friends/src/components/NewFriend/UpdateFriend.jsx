import React from 'react';

class UpdateFriend extends React.Component {
  constructor() {
    super();
    // debugger;
    this.state = {
      friend: {}
    };
  }
  componentDidMount() {
    this.setState({
      friend: this.props.friend
    });
  }

  updateFriend = e => {
    e.preventDefault();
    this.props.updateFriend(this.state.friend);
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
      <form onSubmit={this.updateFriend}>
        <input
          placeholder='Name'
          value={this.state.friend.name}
          onChange={this.handleChanges}
          name='name'
        />
        <input
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
        <button>Update Friend</button>
      </form>
    );
  }
}

export default UpdateFriend;
