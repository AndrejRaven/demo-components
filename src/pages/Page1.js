import { useState } from "react";
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
`;

const Page1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState({
    image: "https://i.postimg.cc/59B3wctT/lodowka-2.png",
    height: 75,
    imageAlt: "blabla",
    title: "Banner Title",
    description: "banner text test first",
    buttonText: "Fix price"
  })

  const changedData = { ...data };

  const handleSetData = () => {
      setData(changedData);
      setIsOpen(false);
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
      <ComponentWrapper onClick={() => setIsOpen(true)}>
        <Banner
          height={data.height}
          image={data.image}
          imageAlt={data.imageAlt}
        >
          <h1>{data.title}</h1>
          <p>{data.description}</p>
          <Button>{data.buttonText}</Button>
        </Banner>
      </ComponentWrapper>
      <Spacer size={100} />
      <h1>Komponent karuzela produktów:</h1>
      <ProductCarusel items={items} />
    </>
  );
};

export default Page1;