import styled from 'styled-components';

interface ButtonProps {
  bgColor?: string,
  textColor?: string,
  isDarkTheme: boolean;
  border?: string,
  customFontSize?: string,
}

interface ButtonContainerProps {
  selected: boolean;
}

export const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: ${({ selected }: ButtonContainerProps) => (selected ? '5px solid blue' : 'none')} ;
`;

export const Button = styled.button`
  margin: 10px;
  background-color: ${(props: ButtonProps) => (props.bgColor ? props.bgColor : 'transparent')};
  cursor: pointer;
  font-size:  ${(props: ButtonProps) => (props.customFontSize ? props.customFontSize : '26px')};
  color: ${(props: ButtonProps) => (props.isDarkTheme ? 'white' : 'black')};
  border-radius: 5px;
  height: 30px;
  border:  ${(props: ButtonProps) => (props.border ? props.border : 'none')};;
  outline: 0;
  &:active {
    background-color: grey;
  }
`;
