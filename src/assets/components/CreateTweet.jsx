import axios from "axios";
import { useState } from "react";
import "./createTweet.css";


const CreateTweet = () => {
  const [tweetContent, setTweetContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  
  const upload = async() => {
      try {
      await axios.post("https://react-workshop-todo.fly.dev/posts", {
          authorname: "sarikag",
          avatar: "data:image/jpeg;base64,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",
          content: tweetContent,
          image: "imageUrl"
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