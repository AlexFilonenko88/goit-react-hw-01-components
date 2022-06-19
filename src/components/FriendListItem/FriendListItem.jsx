import PropTypes from 'prop-types';
import css from "./FriendList.module.css"

export const FriendListItem = ({ friends }) => {
  const component = friends.map(({avatar, name, isOnline, id}) => {
    return (
      <li key={id} className={css.item}>
          <span className={`${css.isOnline} ${css[isOnline]}`}>{isOnline}</span>
          <img className={css.avatar} src={avatar} alt={name} width="48" />
          <p className={css.name}>{name}</p>
      </li>
    );
  });

  return <ul className={css.friend_list}>{component}</ul>;
};

FriendListItem.propTypes = {
  isOnline: PropTypes.bool,
  avatar: PropTypes.string,
  name: PropTypes.string,
}