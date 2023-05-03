import React, { FC } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";

type Props = {
  children: React.ReactNode;
};

const Scrollbar: FC<Props> = ({ children }) => {
  return (
    <Scrollbars
      universal={true}
      thumbMinSize={30}
      // renderThumbVertical={({ style }) => (
      //   <div
      //     className="bg-gray-300 rounded-full"
      //     style={{ ...style, right: "2px", bottom: "2px" }}
      //   />
      // )}
      // renderTrackVertical={({ style }) => (
      //   <div
      //     className="bg-gray-200 rounded-full"
      //     style={{ ...style, right: "2px", bottom: "2px" }}
      //   />
      // )}
    >
      {children}
    </Scrollbars>
  );
};

export default Scrollbar;
