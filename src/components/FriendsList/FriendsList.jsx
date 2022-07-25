import PropTypes from 'prop-types';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import { FriendsListContainer } from './FriendsList.styled';


export const FriendsList = ({friends}) => {
  return (
    <FriendsListContainer>
      {friends.map(({id, avatar, name, isOnline}) => (
        <FriendsListItem
          key={id}
          avatar={avatar}
          name={name}
          isOnline={isOnline}
        />
      ))}
    </FriendsListContainer>
  );
};

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({id: PropTypes.number.isRequired})).isRequired,
};