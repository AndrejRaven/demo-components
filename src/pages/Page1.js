import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Modal from "../components/Modal/Modal";
import BannerConstructor from "../components/Banner/BannerConstructor";
import { Banner } from "../components/Banner/Banner";
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
    htmlContent: '<h2><span style="background-color: rgb(45, 194, 107);">NEW</span></h2><h1>New Perfect Fridge For Your NEXT TRIP</h1><p>Lod&oacute;weczka w bardzo przystępnej cenie, wygodna i z długim kablem ( 2metry). Dodatkowo posiada r&oacute;wnież funkcję grzania. Chłodzi bardzo dobrze. Polecam.</p><p><button class="prm-button">Kup teraz</button></p>'
  })
  const navigate = useNavigate();
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
      <ComponentWrapper onClick={(e) => setIsOpen(true)}>
        <Banner
          height={data.height}
          width={data.width}
          contentPadding={data.contentPadding}
          image={data.image}
          direction={data.direction}
          imageAlt={data.imageAlt}
          imagePosition={data.imagePosition}
          htmlContent={data.htmlContent}
        />
      </ComponentWrapper>
      <Spacer size={100} />
      <h1>Komponent karuzela produktów:</h1>
      <ProductCarusel items={items} />
    </>
  );
};

export default Page1;