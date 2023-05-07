const TweetBody = ({imagesrc, content}) => {
    return(
        <>
        <p className="tweet-text">{content}</p>
        <img
        className="tweet-image"
        src={imagesrc}
        alt="Tweet Image" 
        width={350} />
        </>
    )
}

export default TweetBody;