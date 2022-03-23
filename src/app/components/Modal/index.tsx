import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import AbortModal from './AbortModal';
import { ModalBackdrop, ModalContainer, ModalContainerStack } from './style';

type ModalProps = {
    children: any
    onClose: () => void
    stackInformation: string
}
const Modal = (props: ModalProps) => {
  const isDarkTheme = useSelector((state: any) => state.themeSliceReducer.theme) === 'dark';
  const { children, onClose, stackInformation } = props;
  const [showAbortModal, setAbortModal] = useState(false);

  return (
    <>
      {showAbortModal ? (
        <AbortModal
          onAbort={() => onClose()}
          onUndo={() => setAbortModal(false)}
        />
      ) : null}
      <ModalContainer isDarkTheme={isDarkTheme} zIndex={2}>
        <ModalContainerStack isDarkTheme={isDarkTheme}>{stackInformation}</ModalContainerStack>
        {children}
      </ModalContainer>
      <ModalBackdrop
        zIndex={1}
        isDarkTheme={isDarkTheme}
        onClick={() => {
          setAbortModal(true);
        }}
      />
    </>

  );
};

export default Modal;
