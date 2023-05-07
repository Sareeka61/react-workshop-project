import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css"
import Tweet from "./assets/components/Tweet";
import CreateTweet from "./assets/components/CreateTweet";


const App = () => {
  const [tweets, setTweets] = useState([]);
  const [shouldRefresh, setShouldRefresh] = useState(false);
  const fetchTweets = async () => {
    const posts = await axios.get("https://react-workshop.fly.dev/", {
      headers: {
        apiKey: "645679fe7213f63d432915eb"
      }
    });
    setTweets(posts.data);
  };

  useEffect(()=> {
    fetchTweets();
  },[shouldRefresh]);

  return (
    <>
    <CreateTweet setShouldRefresh={setShouldRefresh}/>
    <Tweet name="Sarika" username="sarikag" timestamp="-2h" body="/cat1.jpeg" content="hi" avatar="cat.png"/>
    <Tweet name="Arpan" username="arpanap" timestamp="-5h" body="cat2.jpg" content="Coming out of the closet" avatar="gay flag.svg"/>
    <Tweet name="Bishnu" username="bishnup"timestamp="-3h" body="cat3.jpeg" content="Ma Canada Jaanxu" avatar="monkey.jpg"/>
    <Tweet name="Prashant" username="itsprashant" timestamp="-6h" body="cat4.jpeg" content="Code is cool"/>

    {tweets.map((tweet) => {
        return <Tweet name={tweet.authorname} username={tweet.authorname} body={tweet.image} content={tweet.content} key={tweet.username} />
      })}
    </>
)
}

export default App;