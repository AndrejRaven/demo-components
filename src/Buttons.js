import styled, { css } from "styled-components";

const variants = {
  outlined: css`
    color: black;
    border: 2px solid black;
    background-color: transparent;
    &:hover {
      border: 2px solid #00d1d2;
    }
    &::after {
      background-color: transparent;
    }
  `,
};

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 2;
  cursor: pointer;
  font-size: 1rem;
  border: none;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 1.5rem;
  color: white;
  background-color: black;
  background-size: 200% 100%;
  background-position: left;
  text-align: center;
  transition: all 0.3s ease;
  &:hover {
    color: black;
  }
  &::before {
    content: "";
    background-color: #00d1d2;
    height: 200%;
    left: -121%;
    position: absolute;
    top: -50%;
    transform: skewX(-20deg);
    transition: left 0.3s, transform 0.3s, width 0.3s;
    width: 0;
    z-index: -1;
  }
  &:hover::before {
    box-shadow: inset 0 0 0 0 #00d1d2;
    left: -10%;
    width: 120%;
  }
  &::after {
    content: "";
    background-color: black;
    height: 200%;
    right: -10%;
    position: absolute;
    top: -50%;
    transform: skewX(-20deg);
    transition: left 0.3s, transform 0.3s, width 0.3s;
    width: 120%;
    z-index: -1;
  }
  &:hover::after {
    box-shadow: inset 0 0 0 0 #00d1d2;
    right: 121%;
    width: 0;
  }

  // variants
  ${({ outlined }) => outlined && variants.outlined}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && "column"};
  gap: 20px;
  justify-content: center;
  align-items: center;
`;
