import React, { useState, useEffect } from 'react';

const Likebtn = ({ likeCount = 0 }) => {
  const [likes, setLikes] = useState(likeCount);

  const handleLike = () => {
    setLikes(prevLikes => prevLikes + 1);
  };

  return (
    <div>
      <center>
      <p>{likes} Likes</p>
      <button onClick={handleLike}>Like</button>
      </center>
    </div>
  );
};

export default Likebtn;
