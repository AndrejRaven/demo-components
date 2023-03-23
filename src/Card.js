import styled from "styled-components";
import { useSwiperSlide } from "swiper/react";
import { Button, ButtonWrapper } from "./Buttons";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 250px;
  transition: all 0.5s ease;
  background-image: ${(props) =>
    props.active ? `url(${props.img})` : `url(${props.secondImg})`};
  transform: ${(props) => (props.active ? "scale(1)" : "scale(0.8)")};
  filter: ${(props) => (props.active ? "" : "brightness(70%)")};
  background-size: cover;
  border-radius: 50%;
  border: none;

  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  margin-top: 20px;
  user-select: none;
  transform: scale(1.1);
  transform: translateY(-30px);
  transition: transform 0.3s ease;
  ${(props) => props.active} {
    transform: scale(0.7);
    transform: translateY(0);
  }
  @media (max-width: 768px) {
    width: 200px;
    height: 200px;
  }
`;

const CardContent = styled.div`
  text-align: center;
  margin-top: 20px;
  margin-left: -20px;
  margin-right: -20px;
  display: ${(props) => (props.active ? "block" : "none")};
  animation: ${(props) =>
    props.active
      ? "fadeIn 0.9s ease-in-out"
      : "fadeOut 0.9s ease-in-out forwards"};
  animation-delay: ${(props) => (props.active ? "0" : "1.2s")};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes fadeOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
`;

export const Card = ({ item }) => {
  const swiperSlide = useSwiperSlide();

  return (
    <CardContainer>
      <ImageContainer
        active={swiperSlide.isActive}
        img={item.img}
        secondImg={item.secondImg}
      >
        <Image active={swiperSlide.isActive} src={item.image} alt="bla" />
      </ImageContainer>
      <CardContent active={swiperSlide.isActive}>
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <ButtonWrapper column>
          <Button>Kup teraz</Button>
          <Button outlined>Zobacz wszystkie produkty</Button>
        </ButtonWrapper>
      </CardContent>
    </CardContainer>
  );
};
