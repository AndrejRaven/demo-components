import "./App.css";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from "styled-components";
import "swiper/css";

import { Card } from "./Card";
import { items } from "./data";

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

  return (
    <>
      <SwiperContainer
        slidesPerView={2}
        spaceBetween={20}
        centeredSlides={true}
        grabCursor={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 3,
            spaceBetween: 20,
            loopedSlides: 2,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 30,
            loopedSlides: 2,
          },
          1024: {
            slidesPerView: 4,
            spaceBetween: 50,
            loopedSlides: 2,
          },
        }}
      >
        {items.map((item, i) => (
          <SwiperCard key={i}>
            <Card item={item} />
          </SwiperCard>
        ))}
      </SwiperContainer>
    </>
  );
};

export default App;
