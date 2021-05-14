import React, { useState } from "react";
import Slick from "react-slick";
import propTypes from "prop-types";

import {
  Overlay,
  Global,
  Header,
  CloseBtn,
  ImgWrapper,
  Indicator,
  SlickWrapper,
} from "./styles";

function ImagesZoom({ images, onClose }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  return (
    <Overlay>
      <Global />
      <Header>
        <h1>상세 이미지</h1>
        <CloseBtn onClick={onClose}>X</CloseBtn>
      </Header>
      <SlickWrapper>
        <Slick
          initialSlide={0}
          beforeChange={(slide) => setCurrentSlide(slide)}
          infinite
          arrows={false}
          slideToScroll={1}
        >
          {images.map((v) => (
            <ImgWrapper key={v.src}>
              <img src={v.src} alt={v.src} />
            </ImgWrapper>
          ))}
        </Slick>
        <Indicator>
          <div>
            {currentSlide + 1} / {images.length}
          </div>
        </Indicator>
      </SlickWrapper>
    </Overlay>
  );
}
ImagesZoom.propType = {
  images: propTypes.arrayOf(propTypes.object).isRequired,
  onClose: propTypes.func.isRequired,
};

export default ImagesZoom;
