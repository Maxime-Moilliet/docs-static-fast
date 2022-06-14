import React from "react";

import { ChakraProvider } from "@chakra-ui/react";
import theme from "@/theme";

export const Providers: React.FC<React.PropsWithChildren<unknown>> = ({
  children,
}) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};
