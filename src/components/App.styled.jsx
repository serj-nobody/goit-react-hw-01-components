import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #e7ecf2;
  color: #3d3d3d;

  @media screen and (min-width: 768px) {
    padding: 50px;
  }
`;