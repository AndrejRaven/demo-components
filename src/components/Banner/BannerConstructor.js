import { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Dropbox";
import { FaTimes, FaCheck } from "react-icons/fa";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ActionButtons = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
`;
const CloseButton = styled.button`
  border: none;
  cursor: pointer;
  background-color: transparent;
`;

const Form = styled.form`
  width: 100%;
  height: 100%;
  min-width: 50vw;
  min-height: 50vh;
`;

const TabWrapper = styled.div`
  display: flex;
  gap: 20px;
  margin-bottom: 1rem;
`;

const Tab = styled.button`
  background-color: ${({ isActive }) => (isActive ? "grey" : "white")};
  color: ${({ isActive }) => (isActive ? "white" : "black")};
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  border: 2px solid gray;
  border-radius: 5px;
`;
const options = [
  { id: 1, width: "25%", label: "25%" },
  { id: 2, width: "50%", label: "50%" },
  { id: 3, width: "75%", label: "75%" },
];

const BannerConstructor = ({ data, changedDate, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

 

  const handleChangeImage = (e) => {
    changedDate.image = e.target.value;
  };
  const handleTitleChange = (e) => {
    changedDate.title = e.target.value;
  }
  const handleHeightChange = (e) => {
    changedDate.height = e.target.value;
  }

  return (
    <Container>
      <ActionButtons>
        <CloseButton onClick={onClose}>
          <FaTimes />
        </CloseButton>
        <CloseButton onClick={onSave}>
          <FaCheck />
        </CloseButton>
      </ActionButtons>
      <Form onClick={(e) => e.preventDefault()}>
        <TabWrapper>
          <Tab
            isActive={activeTab === "tab1"}
            onClick={() => handleTabClick("tab1")}
          >
            General
          </Tab>
          <Tab
            isActive={activeTab === "tab2"}
            onClick={() => handleTabClick("tab2")}
          >
            Images
          </Tab>
          <Tab
            isActive={activeTab === "tab3"}
            onClick={() => handleTabClick("tab3")}
          >
            Content
          </Tab>
        </TabWrapper>
        {activeTab === "tab1" && (
          <div>
            <InputContainer>
              <Label>Image</Label>
              <Input
                defaultValue={changedDate.image}
                onChange={handleChangeImage}
              />
            </InputContainer>
            <InputContainer>
              <Label>Title</Label>
              <Input defaultValue={data.title} onChange={handleTitleChange} />
            </InputContainer>
            <InputContainer>
              <Label>Height</Label>
              <Dropdown options={options} active={data.height} onChange={handleHeightChange} />
            </InputContainer>
          </div>
        )}
        {activeTab === "tab2" && <p>Tab 2 content goes here</p>}
        {activeTab === "tab3" && <p>Tab 3 content goes here</p>}
      </Form>
    </Container>
  );
};

export default BannerConstructor;
