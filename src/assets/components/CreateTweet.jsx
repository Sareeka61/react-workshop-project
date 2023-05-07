import axios from "axios";
import { useState } from "react";
import "./createTweet.css";


const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const upload = async() => {
      try {
      await axios.post("https://react-workshop-todo.fly.dev/posts/", {
          content: tweetContent,
          image: imageUrl
      }, {
        headers: {
          apiKey: "645679fe7213f63d432915eb"
      }
    },);
      setTweetContent("");
      setImageUrl("");
    //   setShouldRefresh((v) => !v);
    } catch(e){
      console.log(e);
        alert('Tweet Uploading failed!!!')
    }
  }

  return (
    <div className="tweet-create">
      <textarea
        id="tweet-text"
        placeholder="What's happening?"
        required 
        value={tweetContent}
        onChange={(e) => setTweetContent(e.target.value)}
      ></textarea>
      <input type="text" 
      id="image-url" 
      placeholder="Enter image URL here...." 
      value={imageUrl} 
      onChange={(e) => setImageUrl(e.target.value)}/>
      <div className="tweet-controls">
        <span id="char-count">280</span>
        <button id="tweet-btn" onClick={upload}>Tweet</button>
      </div>
    </div>
  );
};

export default CreateTweet;