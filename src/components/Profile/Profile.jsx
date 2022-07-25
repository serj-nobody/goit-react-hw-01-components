import PropTypes from 'prop-types';
import { ProfileCard, Description, Avatar, Username, Tag, Location, Stats, StatsItem, StatsName, StatsNumber } from './Profile.styled';


export const Profile = ({ username, tag, location, avatar, stats }) => {

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
          <StatsNumber>{stats.followers}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsName>Views</StatsName>
          <StatsNumber>{stats.views}</StatsNumber>
        </StatsItem>
        <StatsItem>
          <StatsName>Likes</StatsName>
          <StatsNumber>{stats.likes}</StatsNumber>
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
  stats: PropTypes.objectOf(PropTypes.number).isRequired,
};