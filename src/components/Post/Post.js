import React from 'react';
import { Link, useHistory } from 'react-router-dom';

const Post = (props) => {
  const { id, title } = props.post;
  const history = useHistory();

  const handleClick = () => {
    history.push(`/post/${id}`);
  }
  return (
    <div>
      <h2>Post Title: {title}</h2>
      <Link to={`/post/${id}`}>Post Deatil</Link><br/><br/>
      <button onClick={handleClick}>Click To See Detail</button>
    </div>
  );
};

export default Post;