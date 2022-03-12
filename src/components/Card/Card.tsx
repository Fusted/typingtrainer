import React, {FC} from "react";

interface CardProps {
  width?: string;
  height?: string;
}

const Card: FC<CardProps> = ({ width, height, children }) => {
  return (
    <div
      style={{
        width,
        height,
        border: "1px solid #333",
      }}
    >
      {children}
    </div>
  );
};

export default Card;
