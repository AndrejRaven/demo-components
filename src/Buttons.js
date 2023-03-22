import styled, { css } from "styled-components";

const variants = {
  outlined: css`
    background-color: transparent;
    color: black;
  `
};

export const Button = styled.button`
  position: relative;
  overflow: hidden;
  z-index: 0;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
  padding: 0.75rem 2rem;
  border-radius: 1.5rem;
  color: white;
  border: 2px solid black;
  background: black;
  background-size: 200% 100%;
  background-position: left;
  text-align: center;
  transition: all 0.15s ease;
  &:hover {
    color: black;
    border: 2px solid #00d1d2;
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

  // variants
  ${({ outlined }) => outlined && variants.outlined}
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: ${({ column }) => column && 'column'};
  gap: 20px;
  justify-content: center;
  align-items: center;
`