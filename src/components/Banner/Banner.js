import styled from "styled-components";

const BannerContainer = styled.div`
  width: 100%;
  height: ${({ height }) => (height ? `${height}vh}` : "100%")};
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : "none")};
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : "none")};
  background-position: center;
  background-size: cover;
  display: flex;
`;
const Container = styled.div`
  flex: ${({ size }) => (size ? size : 1)};
`;
const ContentContainer = styled.div`
  height: 100%;
  padding: 40px;
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : "none")};
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : "none")};
`;

const Image = styled.img`
  height: 200px;
  width: 200px;
`;

export const Banner = ({ children, image, imageAlt, height }) => {
  return (
    <BannerContainer height={height} backgroundColor='silver'>
      <Container>
        <ContentContainer>
          {children}
        </ContentContainer>
      </Container>
      <Container>
        <ImageContainer>
          <Image src={image} alt={imageAlt} />
        </ImageContainer>
      </Container>
    </BannerContainer>
  );
};
