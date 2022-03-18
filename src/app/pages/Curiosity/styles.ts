import styled from 'styled-components';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const MainTitle = styled.h3<{isDarkTheme: boolean}>`
  text-align: center;
  font-size: 28px;
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
  margin-bottom: 10px;
`;

export const Paragraph = styled.p<{isDarkTheme: boolean, isBold?: boolean}>`
  max-width: 1500px;
  font-size: 26px;
  padding-left: 30px;
  padding-right: 30px;
  font-weight: ${({ isBold }) => (isBold ? 'bold' : 'normal')};
  color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
`;
