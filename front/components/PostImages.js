import React, { useState, useCallback } from 'react';
import propTypes from 'prop-types';
import { PlusOutlined } from '@ant-design/icons';
import ImagesZoom from './ImagesZoom';

function PostImages({ images }) {
  const [ShowImagesZoom, setShowImagesZoom] = useState('');
  const onZoom = useCallback(() => {
    setShowImagesZoom(true);
  }, []);
  const onClose = useCallback(() => {
    setShowImagesZoom(false);
  }, []);

  if (images.length === 1) {
    return (
      <>
        <img
          src={images[0].src}
          alt={images[0].src}
          style={{ width: '40%' }}
          onClick={onZoom}
        />
        {ShowImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  if (images.length === 2) {
    return (
      <>
        <div>
          <img
            role="presentation"
            src={images[0].src}
            alt={images[0].src}
            width="40%"
            onClick={onZoom}
          />
          <img
            role="presentation"
            src={images[1].src}
            alt={images[1].src}
            width="40%"
            onClick={onZoom}
          />
        </div>
        {ShowImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
      </>
    );
  }
  return (
    <>
      <img
        src={images[0].src}
        alt={images[0].src}
        style={{ display: 'inline-block', width: '40%' }}
        role="presentation"
        onClick={onZoom}
      />
      <div
        style={{
          display: 'inline-block',
          width: '40%',
          textAlign: 'center',
          verticalAlign: 'middle',
        }}
        role="presentation"
        onClick={onZoom}
      >
        <PlusOutlined /> {images.length - 1}개의 사진 더보기
      </div>
      {ShowImagesZoom && <ImagesZoom images={images} onClose={onClose} />}
    </>
  );
}

PostImages.propTypes = {
  //배열 안에 객체 [{},{},{} ] 타입이 맞나 확인
  images: propTypes.arrayOf(propTypes.object).isRequired,
};

export default PostImages;
