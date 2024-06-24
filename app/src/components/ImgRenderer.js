import React from 'react';

const ImgRenderer = (props) => {
  const imgUrl = props.value;
  return (
    <img src={imgUrl} alt="props.value" style={{ width: '50px', height: 'auto' }} />
  );
};

export default ImgRenderer;
