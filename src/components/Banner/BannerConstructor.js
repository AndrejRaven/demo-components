import { useState } from "react";
import styled from "styled-components";
import Dropdown from "../Dropbox";
import { FaTimes, FaCheck } from "react-icons/fa";
import GridRadiobox from "../TestRadiobox";
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
  height: 60vh;
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

const TabContent = styled.div`
  overflow-y: scroll;
  width: 100%;
  height: 90%;
`

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
  { id: 1, value: 25, label: "25%" },
  { id: 2, value: 50, label: "50%" },
  { id: 3, value: 75, label: "75%" },
  { id: 4, value: 100, label: "100%" },
  { id: 5, value: false, label: "auto" },
];

const positionOptions = [
  { id: 'tl', value: 'tl', label: "top left" },
  { id: 'tc', value: 'tc', label: "top center" },
  { id: 'tr', value: "tr", label: "top right" },
  { id: 'cl', value: "cl", label: "center left" },
  { id: 'cc', value: "cc", label: "center center" },
  { id: 'cr', value: "cr", label: "center right" },
  { id: 'bl', value: "bl", label: "bottom left" },
  { id: 'bc', value: "bc", label: "bottom center" }, 
  { id: 'br', value: "br", label: "bottom right" },
];

const directionOptions = [
  { id: 1, value: 'rtl', label: "Right to left" },
  { id: 1, value: 'ltr', label: "Left to right" },
]

const BannerConstructor = ({ data, changedData, onClose, onSave }) => {
  const [activeTab, setActiveTab] = useState("general");

  const handleTabClick = (tabId) => {
    setActiveTab(tabId);
  };

  const handleChangeProperty = (property, e) => {
    changedData[property] = e.target.value;
  };

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
          <TabContent>
            <InputContainer>
              <Label>Height</Label>
              <Dropdown
                options={options}
                defaultValue={changedData.height}
                active={data.height}
                valueItem='height'
                onChange={(e) => handleChangeProperty("height", e)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Widht</Label>
              <Dropdown
                options={options}
                defaultValue={changedData.width}
                active={data.width}
                valueItem='width'
                onChange={(e) => handleChangeProperty("width", e)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Direction</Label>
              <Dropdown
                options={directionOptions}
                defaultValue={changedData.direction}
                active={data.direction}
                valueItem='direction'
                onChange={(e) => handleChangeProperty("direction", e)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Content padding</Label>
              <Input
                defaultValue={changedData.contentPadding}
                onChange={(e) => handleChangeProperty("contentPadding", e)}
              />
            </InputContainer>
          </TabContent>
        )}
        {activeTab === "image" && (
          <TabContent>
            <InputContainer>
              <Label>Image</Label>
              <Input
                defaultValue={changedData.image}
                onChange={(e) => handleChangeProperty("image", e)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Image alt</Label>
              <Input
                defaultValue={changedData.imageAlt}
                onChange={(e) => handleChangeProperty("imageAlt", e)}
              />
            </InputContainer>
            <Label>Image position</Label>
            <GridRadiobox position={data.imagePosition} positionOptions={positionOptions} handleChangeProperty={handleChangeProperty} />

          </TabContent>
        )}
        {activeTab === "content" && (
          <TabContent>
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
            <InputContainer>
              <Label>Button text</Label>
              <Input
                defaultValue={data.buttonText}
                onChange={(e) => handleChangeProperty("buttonText", e)}
              />
            </InputContainer>
            <InputContainer>
              <Label>Button link</Label>
              <Input
                defaultValue={data.buttonLink}
                onChange={(e) => handleChangeProperty("buttonLink", e)}
              />
            </InputContainer>
          </TabContent>
        )}
      </Form>
    </Container>
  );
};

export default BannerConstructor;
