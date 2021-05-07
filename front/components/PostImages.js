import React from "react";
import PropTypes from "prop-types";

function PostImages({ images }) {
  return <div>구현중..</div>;
}

PostImages.PropTypes = {
  //배열 안에 객체 [{},{},{} ] 타입이 맞나 확인
  images: PropTypes.arrayOf(PropTypes.object),
};
export default PostImages;
