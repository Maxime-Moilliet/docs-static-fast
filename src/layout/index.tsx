import { VStack } from "@chakra-ui/react";
import React from "react";
import { Footer } from "./Footer";
import { Header } from "./Header";

export const Layout: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return (
    <>
      <Header />
      <VStack mt={16} as="main" minH="100vh" alignItems="stretch" w="full">
        {children}
      </VStack>
      <Footer />
    </>
  );
};
