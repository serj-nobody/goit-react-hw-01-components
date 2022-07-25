import styled from 'styled-components';

export const FriendCard = styled.li`
  display: flex;
  align-items: center;
  background-color: #fff;
  padding: 10px 20px;
  margin-bottom: 30px;
  box-shadow: 0px 10px 15px -3px rgba(0,0,0,0.1);
`;

export const Status = styled.span`
  width: 30px;
  height: 30px;
  background-color: ${({isOnline}) => (isOnline ? 'green' : 'red')};
  margin-right: 20px;
  border-radius: 50%;
`;

export const Avatar = styled.img`
  display: block;
  width: 110px;
  height: 110px;
  border-radius: 5px;
  background-color: #927868;
  margin-right: 20px;
`;

export const Name = styled.p`
  font-size: 28px;
  font-weight: 500;
`;