import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
