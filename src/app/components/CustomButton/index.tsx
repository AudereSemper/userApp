import React from 'react';
import { useSelector } from 'react-redux';
import { ButtonContainer, Button } from './styles';
import CustomButtonProps from './types';

export default function CustomButton({
  text,
  bgColor,
  onClick,
  selected,
}: CustomButtonProps) {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <ButtonContainer selected={selected || false}>
      <Button bgColor={bgColor} onClick={onClick} isDarkTheme={isDarkTheme}>
        {text}
      </Button>
    </ButtonContainer>
  );
}
