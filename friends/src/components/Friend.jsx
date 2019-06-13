import React from 'react';

const Friend = props => {
  const id = props.match.params.id;
  const friend = props.friends.find(friend => `${friend.id}` === id);
  if (!props.friends) {
    return <h2>Loading Friend</h2>;
  } else {
    return (
      <div className='friend-card' key={friend.id}>
        <h2>{friend.name}</h2>
        <p>Age: {friend.age}</p>
        <p>Email: {friend.email}</p>
        <button onClick={e => props.setUpdateFriendForm(e, friend)}>
          Update Friend
        </button>
        <button onClick={e => props.deleteFriend(e, friend)}>
          Delete Friend
        </button>
      </div>
    );
  }
};

export default Friend;
