import React from 'react';
import { useSelector } from 'react-redux';
import CustomButton from '../CustomButton';
import {
  ModalBackdrop, AbortModalContainer, AbortModalField, AbortModalButtons,
} from './style';

type AbortModalProps = {
    onUndo: () => void
    onAbort: () => void
}

const AbortModal = (props: AbortModalProps) => {
  const { onUndo, onAbort } = props;
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';

  return (
    <>
      <AbortModalContainer isDarkTheme={isDarkTheme} zIndex={4}>
        <AbortModalField isDarkTheme={isDarkTheme}>
          Are you sure you want to abort this action ?
          <AbortModalButtons isDarkTheme={isDarkTheme}>
            <CustomButton
              text="Yes"
              onClick={() => onAbort()}
            />
            <CustomButton
              text="No"
              onClick={() => onUndo()}
            />
          </AbortModalButtons>
        </AbortModalField>
      </AbortModalContainer>
      <ModalBackdrop
        zIndex={3}
        isDarkTheme={isDarkTheme}
      />
    </>
  );
};

export default AbortModal;
