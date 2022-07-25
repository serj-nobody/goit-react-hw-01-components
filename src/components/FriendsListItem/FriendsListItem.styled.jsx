import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 20px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);

  @media screen and (min-width: 768px) {
    margin-bottom: 30px;
  }
`;

export const Status = styled.span`
  content: '';
  width: 20px;
  height: 20px;
  background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
  margin-right: 20px;
  border-radius: 50%;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  background-color: #927868;
  margin-right: 20px;

  @media screen and (min-width: 768px) {
    width: 110px;
    height: 110px;
  }
`;

export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;

  @media screen and (min-width: 768px) {
    font-size: 28px;
  }
`;