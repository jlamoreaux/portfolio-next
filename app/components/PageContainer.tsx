import { FC, ReactNode } from "react";

export enum FlexDirection {
  Row = "row",
  Column = "col",
}

export const PageContainer: FC<{
  children: ReactNode;
  flexDirection?: FlexDirection;
}> = ({ children, flexDirection = FlexDirection.Column }) => {
  const className = `flex flex-${flexDirection} flex-grow container mx-auto py-0 md:py-8 mb-4 h-full`;
  return <div className={className}>{children}</div>;
};
