import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import docsStaticConfig from "docs-static.config";
import React from "react";

export const Banner = () => {
  return (
    <VStack
      as="section"
      py={20}
      spacing={8}
      bg={docsStaticConfig.banner.backgroundColor}
    >
      <Heading as="h1" size="3xl" color="white">
        {docsStaticConfig.banner.title}
      </Heading>
      <Text fontSize="lg" color="white">
        {docsStaticConfig.banner.content}
      </Text>
      <Button size="lg">{docsStaticConfig.banner.button}</Button>
    </VStack>
  );
};
