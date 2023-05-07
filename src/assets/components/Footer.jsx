import { useState } from "react";
import LikeButton from "./LikeButton";
import UnlikeButton from "./UnLikeButton";

const Footer = () => {
  
  const [isLiked, setIsLiked] = useState(false);
  const toggle = () => {
    setIsLiked((isLiked) => !isLiked);
  };

  return (
    <div className="tweet-footer">
      <button className="btn-reply">Reply</button>
      <button className="btn-retweet">Retweet</button>
      {isLiked ? (
        <UnlikeButton toggle={toggle} />
      ) : (
        <LikeButton toggle={toggle} />
      )}
      <button className="btn-share">Share</button>
    </div>
  );
};

export default Footer;