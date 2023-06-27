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
  { id: 1, height: 25, label: "25%" },
  { id: 2, height: 50, label: "50%" },
  { id: 3, height: 75, label: "75%" },
  { id: 4, height: 100, label: "100%" },
];

const BannerConstructor = ({ data, changedData, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleChangeProperty = (property, e) => {
    changedData[property] = e.target.value;
    console.log(changedData[property])
  };

  const handleSelectChange = (e) => {
    console.log(e.target.value)
    changedData.height = e.target.value;
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
            isActive={activeTab === "general"}
            onClick={() => handleTabClick("general")}
          >
            General
          </Tab>
          <Tab
            isActive={activeTab === "image"}
            onClick={() => handleTabClick("image")}
          >
            Images
          </Tab>
          <Tab
            isActive={activeTab === "content"}
            onClick={() => handleTabClick("content")}
          >
            Content
          </Tab>
        </TabWrapper>
        {activeTab === "general" && (
          <div>
            <InputContainer>
              <Label>Height</Label>
              <Dropdown
                options={options}
                defaultValue={changedData.height}
                active={data.height}
                onChange={handleSelectChange}
              />
            </InputContainer>
          </div>
        )}
        {activeTab === "image" && (
          <div>
            <InputContainer>
              <Label>Image</Label>
              <Input
                defaultValue={changedData.image}
                onChange={(e) => handleChangeProperty("image", e)}
              />
            </InputContainer>
          </div>
        )}
        {activeTab === "content" && (
          <div>
            <InputContainer>
              <Label>Title</Label>
              <Input
                defaultValue={data.title}
                onChange={(e) => handleChangeProperty("title", e)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Description</Label>
              <Input
                defaultValue={data.description}
                onChange={(e) => handleChangeProperty("description", e)}
              />
            </InputContainer>
          </div>
        )}
      </Form>
    </Container>
  );
};

export default BannerConstructor;
