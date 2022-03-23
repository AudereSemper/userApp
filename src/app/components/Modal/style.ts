import styled from 'styled-components';

export const AbortModalContainer = styled.div<{isDarkTheme: boolean, zIndex: number}>`
    position: fixed;
    left: 0px;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
    z-index: ${({ zIndex }) => zIndex};
`;

export const AbortModalField = styled.div<{isDarkTheme: boolean}>`
    width: 12.5%;
    border-radius: 5px;
    padding: 10px;
    background: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : 'white')};
    color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
`;

export const AbortModalButtons = styled.div<{isDarkTheme: boolean}>`
    display: flex;
    justify-content: space-between
`;

export const ModalContainer = styled.div<{isDarkTheme: boolean, zIndex: number}>`
    position: fixed;
    left: 25%;
    right: 0px;
    top: 0px;
    bottom: 0px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${({ isDarkTheme }) => (isDarkTheme ? 'black' : 'white')};
    color: ${({ isDarkTheme }) => (isDarkTheme ? 'white' : 'black')};
    z-index: ${({ zIndex }) => zIndex};
`;

export const ModalContainerStack = styled.div<{isDarkTheme: boolean}>`
    width: 100%;
    text-align: left;
    padding-left: 50px;
    margin-bottom: 10px;
    color: ${({ isDarkTheme }) => (isDarkTheme ? 'gray' : 'gray')};
`;

export const ModalContent = styled.div`
    z-index: 5;
`;

export const ModalBackdrop = styled.div<{isDarkTheme: boolean, zIndex: number}>`
  position: fixed;
  left: 0px;
  right: 0px;
  top: 0px;
  bottom: 0px;
  background: ${({ isDarkTheme }) => (isDarkTheme ? 'gray' : 'black')};
  opacity: 0.5;
  z-index: ${({ zIndex }) => zIndex};
`;
