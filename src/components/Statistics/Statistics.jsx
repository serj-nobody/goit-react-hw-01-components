import PropTypes from 'prop-types';
import { StatisticsSection, Title, StatsList, StatsItem, StatsLabel, StatsNumber } from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatsList>
        {stats.map(({ id, label, percentage }) => (
          <StatsItem key={id} style={{backgroundColor: randomHexColor()}}>
            <StatsLabel>{label}</StatsLabel>
            <StatsNumber>{percentage}%</StatsNumber>
          </StatsItem>
        ))}
      </StatsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.object).isRequired,
};

function randomHexColor () {
  let n = (Math.random() * 0xfffff * 1000000).toString(16);
  return '#' + n.slice(0, 6);
};

