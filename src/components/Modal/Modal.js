import React from "react";
import styled from "styled-components";


const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 2rem;
  position: relative;
`;

const Modal = ({ isOpen, children }) => {

  return (
    <>
      {isOpen && (
        <ModalWrapper>
          <ModalContent onClick={(e) => e.stopPropagation()}>
            {children}
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default Modal;
