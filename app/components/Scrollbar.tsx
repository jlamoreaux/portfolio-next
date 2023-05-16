import React, { FC } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

type Props = {
  children: React.ReactNode;
};

const Scrollbar: FC<Props> = ({ children }) => {
  const viewStyle = {
    overflowY: "auto",
    paddingRight: "8px", // Add space for the scrollbar
  };

  const thumbStyle = {
    backgroundColor: "#ccc",
    borderRadius: "50%",
    width: "8px",
    right: "-2px", // Adjust the thumb position
  };

  const trackStyle = {
    backgroundColor: "#ddd",
    width: "16px",
    right: "2px", // Adjust the track position
  };

  return (
    <Scrollbars
      universal={true}
      style={{ width: "100%", height: "400px" }}
      renderView={({ style }) => <div style={{ ...style, ...viewStyle }} />}
      renderThumbVertical={({ style }) => (
        <div style={{ ...style, ...thumbStyle }} />
      )}
      renderTrackVertical={({ style }) => (
        <div style={{ ...style, ...trackStyle }} />
      )}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
