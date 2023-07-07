import styled from "styled-components";
import { Editor } from "@tinymce/tinymce-react";

const BannerContainer = styled.div`
  width: ${({ width }) => (width ? `${width}%` : "auto")};
  height: ${({ height }) => (height ? `${height}vh}` : "auto")};
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
  justify-content: ${({ position }) => getPosition(position).justifyContent};
  align-items: ${({ position }) => getPosition(position).alignItems};
  background-color: ${({ backgroundColor }) => (backgroundColor ? backgroundColor : "none")};
  background-image: ${({ backgroundImage }) => (backgroundImage ? `url(${backgroundImage})` : "none")};
  background-repeat: no-repeat;
  background-position: center center;
`;

function getPosition(position) {
  switch (position) {
    case 'tl':
      return { justifyContent: 'flex-start', alignItems: 'flex-start' };
    case 'tc':
      return { justifyContent: 'center', alignItems: 'flex-start' };
    case 'tr':
      return { justifyContent: 'flex-end', alignItems: 'flex-start' };
    case 'cl':
      return { justifyContent: 'flex-start', alignItems: 'center' };
    case 'cc':
      return { justifyContent: 'center', alignItems: 'center' };
    case 'cr':
      return { justifyContent: 'flex-end', alignItems: 'center' };
    case 'bl':
      return { justifyContent: 'flex-start', alignItems: 'flex-end' };
    case 'bc':
      return { justifyContent: 'center', alignItems: 'flex-end' };
    case 'br':
      return { justifyContent: 'flex-end', alignItems: 'flex-end' };
    default:
      return { justifyContent: 'center', alignItems: 'center' };
  }
}

const Image = styled.img`
  height: 400px;
  width: 400px;
`;

export const Banner = ({ image, imageAlt, height, width, direction, contentPadding, imagePosition, htmlContent }) => {


  return (
    <BannerContainer 
      height={height}
      width={width} 
      direction={direction} 
      backgroundColor='silver'>
      <Container>
        <ContentContainer contentPadding={contentPadding} >
          <Editor
            initialValue={htmlContent}
            apiKey='cxsxdi10ibr4ph9jphmz0xgheq27z5dgrljkfif43z61j7zh'
            disabled={true} // Optional: Set to true to disable editor interactions
            inline={true}
          />
        </ContentContainer>
      </Container>
      <Container>
        <ImageContainer position={imagePosition} >
          <Image src={image} alt={imageAlt} />
        </ImageContainer>
      </Container>
    </BannerContainer>
  );
};
