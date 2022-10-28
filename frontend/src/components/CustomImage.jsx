import React from "react";

// eslint-disable-next-line react/prop-types
function CustomImage({ imgSrc, pt }) {
  return (
    <div className="custom-image" style={{ paddingTop: pt }}>
      <img src={imgSrc} alt="" />
    </div>
  );
}

export default CustomImage;
