import React, { useState } from 'react';
import styled from 'styled-components';

const GridRadioboxContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0;
  width: fit-content;
  margin-top: 10px;
`;

const Radiobox = styled.label`
  display: flex;
  align-items: center;
  position: relative;
  width: 50px;
  height: 50px;
`;

const RadioboxInput = styled.input`
  position: absolute;
  width: 100%;
  height: 100%;
  opacity: 0;
  cursor: pointer;
`;

const RadioboxIcon = styled.span`
  display: block;
  width: 100%;
  height: 100%;
  border: 1px solid #ccc;
  background-image: ${props => (props.checked ? "url(https://freeiconshop.com/wp-content/uploads/edd/image-outline-filled.png)" : '#fff')};
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

const GridRadiobox = ({ positionOptions, position, handleChangeProperty}) => {
  const [checkedPosition, setCheckedPosition] = useState(position);

  const handleChange = (event) => {
    setCheckedPosition(event.target.value);
    handleChangeProperty('imagePosition', event.target.value)
  };

  return (
    <GridRadioboxContainer>
      {positionOptions.map(option => (
        <Radiobox key={option.id} htmlFor={option.id}>
          <RadioboxInput
            type="radio"
            name="position"
            value={option.value}
            id={option.id}
            checked={checkedPosition === option.value}
            onChange={handleChange}
          />
          <RadioboxIcon checked={checkedPosition === option.value} />
        </Radiobox>
      ))}
    </GridRadioboxContainer>
  );
};

export default GridRadiobox;
