import PropTypes from 'prop-types';
import FriendListItem from './FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  const renderList = () =>
    friends.map(({ avatar, name, isOnline, id }) => (
      <FriendListItem
        key={id}
        avatar={avatar}
        name={name}
        isONLine={isOnline}
      />
    ));

  return <ul className={s.list}>{friends && renderList()}</ul>;

  // return (
  //     <ul className={s.list}>
  //         {friends.map(({ avatar, name, isOnline, id }) => (
  //             <FriendListItem
  //             key={id}
  //             avatar={avatar}
  //             name={name}
  //             isONLine={isOnline}
  //             />
  //         ))}
  //     </ul>
  // );
};

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
    })
  ),
};

export default FriendList;
