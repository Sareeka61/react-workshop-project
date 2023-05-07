import { useEffect, useState } from "react";
import Tweet from "../assets/components/Tweet";
import { useParams } from "react-router-dom";
import axios from "axios";

const SingleTweet = () => {
  const [tweet, setTweet] = useState(null);
  const { id } = useParams();
  const fetchTweet = async () => {
    const resp = await axios.get(
      `https://react-workshop-todo.fly.dev/posts/${id}`,
      {
        headers: {
          apiKey:"645679fe7213f63d432915eb" ,
        },
      }
    );
    console.log(resp.data);
    setTweet(resp.data.post);
  };
  useEffect(() => {
    fetchTweet();
  }, []);
  return (
    <>
      {tweet ? (
        <Tweet
          avatar={`https://avatars.githubusercontent.com/u/${tweet?.user?.githubId}`}
          content={tweet?.content}
          id={tweet?._id}
          name={tweet?.user.fullname}
          username={tweet?.user.name}
          image={tweet?.image}
        />
      ) : null}
    </>
  );
};

export default SingleTweet;