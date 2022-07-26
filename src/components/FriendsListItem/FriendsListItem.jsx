import PropTypes from 'prop-types';
import { FriendCard, Status, Avatar, Name } from './FriendsListItem.styled';


export const FriendsListItem = ({avatar, name, isOnline}) => {
  return (
    <FriendCard>
      <Status isOnline={isOnline}></Status>
      <Avatar src={avatar} alt="User avatar" width="110" />
      <Name>{name}</Name>
    </FriendCard>

  );
};

FriendsListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};