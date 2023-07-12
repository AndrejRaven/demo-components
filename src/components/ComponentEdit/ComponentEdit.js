import styled from "styled-components";
import Modal from "../Modal/Modal";
import { useState } from "react";

const ComponentWrapper = styled.div`
  padding: 0 50px;
  opacity: 100%;
  border-top: 2px solid grey;
  border-bottom: 2px solid gray;

  &:hover {
    opacity: 50%;
  }
  &:nth-child(0) {
    pointer-events: none;
  }
`;

export const ComponentEdit = ({ customData, Constructor, ViewComponent }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState(customData);

  const handleSetData = () => {
    setData(changedData);
    setIsOpen(false);
}
const changedData = { ...data };

  return (
    <>
      <Modal isOpen={isOpen}>
        <Constructor
          data={data}
          changedData={changedData}
          setData={setData}
          onClose={() => setIsOpen(false)}
          onSave={handleSetData}
        />
      </Modal>
      <ComponentWrapper onClick={(e) => setIsOpen(true)}>
        <ViewComponent
          data={data}
        />
      </ComponentWrapper>
    </>
  );
};
