import React from 'react';
import axios from 'axios';
import { Route, Link, NavLink, withRouter } from 'react-router-dom';

import FriendsList from './components/FriendsList/FriendsList';
import Home from './components/Home';
import Friend from './components/Friend';
import NewFriend from './components/NewFriend/NewFriend';

import './App.scss';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      friends: []
    };
  }

  componentDidMount() {
    axios
      .get('http://localhost:5000/friends')
      .then(friend => this.setState({ friends: friend.data }))
      .catch(err => console.log(err));
  }

  addFriend = item => {
    axios
      .post('http://localhost:5000/friends', item)
      .then(res => {
        this.setState({ friends: res.data });
        this.props.history.push('/friends');
      })
      .catch(err => console.log(err));
  };
  render() {
    if (!this.state.friends) {
      return <h2>Loading Friends</h2>;
    }
    return (
      <div className='App'>
        <div className='navbar-wrapper'>
          <ul className='navbar'>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/friends'>Friends</NavLink>
            </li>
            <li>
              <NavLink to='/newfriend'>Add Friend</NavLink>
            </li>
          </ul>
        </div>
        <Route exact path='/' component={Home} />
        <Route
          exact
          path='/friends'
          render={props => (
            <FriendsList {...props} friends={this.state.friends} />
          )}
        />
        <Route
          path='/friends/:id'
          render={props => <Friend {...props} friends={this.state.friends} />}
        />
        <Route
          path='/newfriend'
          render={props => (
            <NewFriend
              {...props}
              friends={this.state.friends}
              addFriend={this.addFriend}
            />
          )}
        />
      </div>
    );
  }
}

export const AppWithRouter = withRouter(App);
