import propTypes from 'prop-types';
import defaultImage from "./22.jpg"

export const Profile = ({ username = "не известно", tag, location, avatar=defaultImage, followers, views, likes }) => {
  
  return (
    <div class="profile">
      <div class="description">
        <img
          src={avatar}
          alt="User avatar"
          width="120"
          class="avatar"

        />
        <p class="name">{username}</p>
        <p class="tag">{tag}</p>
        <p class="location">{location}</p>
      </div>

      <ul class="stats">
        <li>
          <span class="label">Followers</span>
          <span class="quantity">{followers}</span>
        </li>
        <li>
          <span class="label">Views</span>
          <span class="quantity">{views}</span>
        </li>
        <li>
          <span class="label">Likes</span>
          <span class="quantity">{likes}</span>
        </li>
      </ul>
    </div>
  )
};

Profile.propTypes = {
  username: propTypes.string,
  tag: propTypes.string,
  location: propTypes.string,
  avatar: propTypes.string,
  stats: propTypes.string,
  followers: propTypes.number,
  views: propTypes.number,
  likes: propTypes.number,
}