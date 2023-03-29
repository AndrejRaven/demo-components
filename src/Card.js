import styled from "styled-components";
import { useSwiperSlide } from "swiper/react";

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

export const Card = ({ item, activeIndex }) => {
  const activeItem = useSwiperSlide().isActive;

  const active = activeIndex >= 0 && activeItem;
 
  return (
    <CardContainer>
      <ImageContainer
        active={active}
        img={item.img}
        secondImg={item.secondImg}
      >
        <Image active={active} src={item.image} alt="bla" />
      </ImageContainer>
    </CardContainer>
  );
};
