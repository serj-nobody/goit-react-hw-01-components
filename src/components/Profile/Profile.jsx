import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, Username, Tag, Location, Stats, StatsItem, StatsName, StatsNumber } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {

  return (
    <ProfileCard>
      <Description>
        <Avatar
          src={avatar}
          alt="User avatar"
        />
        <Username>{username}</Username>
        <Tag>{tag}</Tag>
        <Location>{location}</Location>
      </Description>

      <Stats>
        <StatsItem>
          <StatsName>Followers</StatsName>
          <StatsNumber>{followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsNumber>{views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsNumber>{likes}</StatsNumber>
        </StatsItem>
      </Stats>
    </ProfileCard>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }).isRequired,
};