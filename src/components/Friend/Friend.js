import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Friend = (props) => {
  const{ id, name, phone, website, address } = props.friend;
  const history = useHistory();
  const friendStyle = {
    border : "3px solid violet",
    padding : "10px",
    borderRadius : "10px",
  };
  const url = `/friend/${id}`;
  const handleFriendClick = () => {
    history.push(`/friend/${id}`);
  }

  return (
    <div style={friendStyle}>
      <h1>This is {name}, ID: {id}</h1>
      <h5>Call me {phone}</h5>
      <p>Website: {website}</p>
      <p>My adderss: {address.city}</p>
      <Link to={url}>Visit Me</Link>
      <br />
      <Link to={url}>
        <button>Visit Me</button>
      </Link>
      <br />
      <button onClick={handleFriendClick}>Visit Me 2</button>
    </div>
  );
};

export default Friend;