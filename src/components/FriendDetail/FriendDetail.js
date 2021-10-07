import React, { useEffect, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const FriendDetail = () => {
  const {friendId} = useParams();
  const [friend, setFriend] = useState({});
  const history = useHistory();
  useEffect(() => {
    const url = `https://jsonplaceholder.typicode.com/users/${friendId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => setFriend(data));
  }, []);

  const handleClick = () => {
    history.push('/friends');
  }
  return (
    <div>
      <h1>Friend detail of ID {friendId}</h1>
      <h2>Name: {friend.name}</h2>
      <h4>Phone: {friend.phone}</h4>
      <h4>Phone: {friend.website}</h4>
      <h4>Works at: {friend.company?.name}</h4>
      <button onClick={handleClick}>See All Friends</button>
    </div>
  );
};

export default FriendDetail;