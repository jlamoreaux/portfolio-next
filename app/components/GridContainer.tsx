import { FC, ReactNode } from "react";

type GridContainerProps = {
  children: ReactNode;
};

const GridContainer: FC<GridContainerProps> = ({ children }) => {
  return (
    <div className="grid gap-12 xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
      {children}
    </div>
  );
};

export default GridContainer;
