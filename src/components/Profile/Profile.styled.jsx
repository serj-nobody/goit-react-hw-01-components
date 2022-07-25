import styled from 'styled-components';

export const ProfileCard = styled.div`
  width: 420px;
  background-color: #fff;
  margin-bottom: 50px;
  border-radius: 8px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
  overflow: hidden;
`;

export const Description = styled.div`
  padding: 50px;
`;

export const Avatar = styled.img`
  display: block;
  margin: 0 auto;
  width: 170px;
  height: 170px;
  border-radius: 85px;
  background-color: #927868;
  object-fit: cover;
  object-position: 0 20px;
`;

export const Username = styled.p`
  text-align: center;
  margin-top: 50px;
  font-size: 28px;
  font-weight: 500;
`;

export const Tag = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #9d9d9d;
`;

export const Location = styled.p`
  text-align: center;
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
  color: #9d9d9d;
`;

export const Stats = styled.ul`
  display: flex;
  background-color: #f3f6f9;
`;

export const StatsItem = styled.li`
  display: flex;
  flex-direction: column;
  width: 33.33%;
  padding: 30px 15px;
  text-align: center;
  border: solid 1px #ebeff4;
`;

export const StatsName = styled.span`
  color: #9d9d9d;
`;

export const StatsNumber = styled.span`
  font-size: 20px;
  font-weight: 700;
  margin-top: 10px;
`;