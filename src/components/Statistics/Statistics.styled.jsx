import styled from 'styled-components';

export const StatisticsSection = styled.section`
  width: 100%;
  max-width: 420px;
  background-color: #fff;
  margin-bottom: 50px;
  text-align: center;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const Title = styled.h2`
  padding: 30px 15px;
  font-size: 20px;
  font-weight: 500;
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    padding: 55px 30px;
  }
`;

export const StatsList = styled.ul`
  display: flex;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 25%;
  padding: 15px 10px;

  @media screen and (min-width: 768px) {
    padding: 25px 15px;
  }
`;

export const StatsLabel = styled.span`
  color: #fff;
`;

export const StatsNumber = styled.span`
  color: #fff;
`;
