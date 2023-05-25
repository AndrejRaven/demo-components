import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import { Button, ButtonWrapper } from "../Buttons";
import { Card } from "./Card";
import { useState } from "react";

const SwiperContainer = styled(Swiper)`
  width: 100%;
  height: 100%;
  padding-top: 40px;
  padding-bottom: 40px;
`;

const SwiperCard = styled(SwiperSlide)`
  text-align: center;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CardContent = styled.div`
  text-align: center;
  cursor: default;
  font-size: 1rem;
  display: ${(props) => (props.active >= 0 ? "block" : "none")};
  animation: ${(props) =>
    props.active >= 0
      ? "fadeIn 0.9s ease-in-out"
      : "fadeOut 0.9s ease-in-out forwards"};
  animation-delay: ${(props) => (props.active >= 0 ? "0" : "1.2s")};
    h3 {
      font-size: 1.5rem;
    }
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

export const ProductCarusel = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [realIndex, setRealIndex] = useState(1);

  return (
    <>
      <SwiperContainer
        initialSlide={1}
        slidesPerView={2}
        loopedSlides={6}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          setRealIndex(swiper.realIndex);
        }}
        centeredSlides={true}
        grabCursor={true}
        onTouchStart={() => {
          setActiveIndex(-1);
        }}
        onTouchEnd={(swiper) => {
          setActiveIndex(swiper.realIndex);
        }}
        loop={true}
        slideToClickedSlide={true}
        breakpoints={{
          640: {
            slidesPerView: 2,
            spaceBetween: 20,
            loopedSlides: 6,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            loopedSlides: 6,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            loopedSlides: 6,
          },
        }}
      >
        {[...items, ...items, ...items, ...items].map((item, i) => (
          <SwiperCard key={i}>
            <Card item={item} activeIndex={activeIndex} />
          </SwiperCard>
        ))}
        <div style={{ minHeight: "250px", paddingTop: '20px' }}>
          { console.log(activeIndex)}
           { activeIndex >= 0 && (
            <CardContent active={activeIndex}>
              <h3>{[...items, ...items, ...items, ...items][realIndex].title}</h3>
              <p>{[...items, ...items, ...items, ...items][realIndex].desc}</p>
              <ButtonWrapper column>
                <Button
                  onClick={() => {
                    alert("hello there");
                  }}
                >
                  Kup teraz
                </Button>
                <Button outlined>Zobacz wszystkie produkty</Button>
              </ButtonWrapper>
            </CardContent>
          )}
        </div>
      </SwiperContainer>
    </>
  );
};