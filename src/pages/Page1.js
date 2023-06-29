import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import BannerConstructor from "../components/Banner/BannerConstructor";
import { Banner } from "../components/Banner/Banner";
import { Button } from "../components/Buttons";
import { Spacer } from "../helper/Spacer";
import { ProductCarusel } from "../components/Carusel/ProductCarusel";
import { items } from "../data";



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

const Page1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    height: 75,
    width: 100,
    direction: 'rtl',
    contentPadding: 40,
    image: "https://i.postimg.cc/59B3wctT/lodowka-2.png",
    imageAlt: "blabla",
    imagePosition: "br",
    title: "Banner Title",
    description: "In adipisicing est aute irure exercitation ut deserunt pariatur aute ex. Nostrud consequat commodo proident in eiusmod sint ullamco irure velit ipsum ea est duis sunt. Labore id ipsum ullamco Lorem consequat aute ea anim et.",
    buttonText: "Learn more",
    buttonLink: "page2"
  })
  const navigate = useNavigate();
  const changedData = { ...data };

  const handleSetData = () => {
      setData(changedData);
      setIsOpen(false);
  }

  const buttonClick = (link) => {
    navigate(link)
  }

  return (
    <>
    <h1>Komponent do edytowania zawartośći:</h1>
      <Modal isOpen={isOpen}>
        <BannerConstructor 
          data={data} 
          changedData={changedData} 
          setData={setData} 
          onClose={() => setIsOpen(false)} 
          onSave={handleSetData} />
      </Modal>
      <ComponentWrapper onClick={(e) => setIsOpen(true)}>
        <Banner
          height={data.height}
          width={data.width}
          contentPadding={data.contentPadding}
          image={data.image}
          direction={data.direction}
          imageAlt={data.imageAlt}
          imagePosition={data.imagePosition}
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <Button onClick={() => buttonClick(data.buttonLink)}>{data.buttonText}</Button>
        </Banner>
      </ComponentWrapper>
      <Spacer size={100} />
      <h1>Komponent karuzela produktów:</h1>
      <ProductCarusel items={items} />
    </>
  );
};

export default Page1;