import styled from "styled-components";

const BannerContainer = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "100%")};
  height: ${({ height }) => (height ? `${height}vh}` : "100%")};
  margin: 0 auto;
  background-color: ${({ backgroundColor }) => (backgroundColor ? `${backgroundColor}` : "none")};
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : "none")};
  background-position: center;
  background-size: cover;
  display: flex;
  flex-direction: ${({ direction }) => (direction === 'rtl' ? 'row' : "row-reverse")};
`;
const Container = styled.div`
  flex: ${({ size }) => (size ? size : 1)};
`;
const ContentContainer = styled.div`
  height: 100%;
  padding: ${({ contentPadding }) => (contentPadding ? `${contentPadding}px` : '20px')};
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
  height: 400px;
  width: 400px;
`;

export const Banner = ({ children, image, imageAlt, height, width, direction, contentPadding }) => {
  return (
    <BannerContainer 
      height={height}
      width={width} 
      direction={direction} 
      backgroundColor='silver'>
      <Container>
        <ContentContainer contentPadding={contentPadding} >
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
