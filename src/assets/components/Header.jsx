const Header = ({name, username, timestamp, avatar}) => {
    return (
     
        <div className="tweet-header">
        <img
        className="profile-pic"
        src={avatar}
        alt="Profile Picture"
        />
        <h3 className="username">{name}</h3>
        <span className="handle">{username}</span>
        <span className="timestamp">{timestamp}</span>
      </div>
    )
}

export default Header;