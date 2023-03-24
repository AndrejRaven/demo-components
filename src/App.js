import "./App.css";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import styled from "styled-components";
import "swiper/css";

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

const App = () => {
  const [activeIndex, setActiveIndex] = useState(false);

  return (
    <>
      <SwiperContainer
        slidesPerView={2}
        loopedSlides={6}
        spaceBetween={20}
        centeredSlides={true}
        grabCursor={true}
        onTouchStart={() => {
          setActiveIndex(false);
        }}
        onTouchEnd={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
        loop={true}
        slideToClickedSlide={true}
        touchMoveStopPropagation={false}
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
      </SwiperContainer>
    </>
  );
};

export default App;
