import styled from 'styled-components';

export const StyledHomeContainer = styled.div``;

export const StyledRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  @media (max-width: 900px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const StyledListContainer = styled.div`
  height: 90wh;
  display: 'flex';
`;
