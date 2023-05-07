import Header from "./Header";
import TweetBody from "./TweetBody";
import Footer from "./Footer";


const Tweet = ({name,username,timestamp,body,content,avatar}) => {
    
    return (
<div className>
<div className="tweet-content">
 <Header name={name} username={username} timestamp={timestamp} avatar={avatar}/>
 <TweetBody imagesrc={body} content={content}/>
 <Footer />
</div>
</div>
  );
};

export default Tweet;