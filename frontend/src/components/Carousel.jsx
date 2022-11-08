import React, { useState } from "react";

import { TiChevronLeftOutline, TiChevronRightOutline } from "react-icons/ti";

const MAX_VISIBILITY = 3;

// eslint-disable-next-line react/prop-types
function Carousel({ children }) {
  const [active, setActive] = useState(2);
  const count = React.Children.count(children);

  return (
    <div className="carousel">
      {active > 0 && (
        <button
          type="button"
          className="actionSlide left"
          onClick={() => setActive((i) => i - 1)}
        >
          <TiChevronLeftOutline />
        </button>
      )}
      {React.Children.map(children, (child, i) => (
        <div
          className="card-container"
          style={{
            "--active": i === active ? 1 : 0,
            "--offset": (active - i) / 3,
            "--direction": Math.sign(active - i),
            "--abs-offset": Math.abs(active - i) / 3,
            pointerEvents: active === i ? "auto" : "none",
            opacity: Math.abs(active - i) >= MAX_VISIBILITY ? "0" : "1",
            display: Math.abs(active - i) > MAX_VISIBILITY ? "none" : "block",
          }}
        >
          {child}
        </div>
      ))}
      {active < count - 1 && (
        <button
          type="button"
          className="actionSlide right"
          onClick={() => setActive((i) => i + 1)}
        >
          <TiChevronRightOutline />
        </button>
      )}
    </div>
  );
}

export default Carousel;
