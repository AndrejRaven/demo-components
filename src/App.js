import "./App.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styled from "styled-components";
import "swiper/css";
import { Button, ButtonWrapper } from "./Buttons";
import { Card } from "./Card";
import { items } from "./data";
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
  margin-left: -20px;
  margin-right: -20px;

  font-size: 1rem;
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

const App = () => {
  const [activeIndex, setActiveIndex] = useState(4);
  const [realIndex, setRealIndex] = useState(4);

  return (
    <>
      <SwiperContainer
        initialSlide={4}
        slidesPerView={2}
        loopedSlides={6}
        spaceBetween={20}
        onSlideChange={(swiper) => {
          setRealIndex(swiper.realIndex);
        }}
        centeredSlides={true}
        grabCursor={true}
        onTouchStart={() => {
          setActiveIndex(null);
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
        {[...items, ...items].map((item, i) => (
          <SwiperCard key={i}>
            <Card item={item} activeIndex={activeIndex} />
          </SwiperCard>
        ))}
        <div style={{ height: "900px", paddingTop: '20px' }}>
          {activeIndex && (
            <CardContent active={activeIndex}>
              <h3>{[...items, ...items][realIndex].title}</h3>
              <p>{[...items, ...items][realIndex].desc}</p>
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

export default App;
