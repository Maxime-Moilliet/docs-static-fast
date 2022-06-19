import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import { DocsStaticConfigBannerType } from "docs-static.types";
import React from "react";

export const Banner: React.FC<{
  data: DocsStaticConfigBannerType;
}> = ({ data }) => {
  return (
    <VStack as="section" py={16} spacing={8} bg="green.400">
      <Heading as="h1" size="3xl" color="white">
        {data.title}
      </Heading>
      <Text fontSize="lg" py={5} color="white">
        {data.content}
      </Text>
      <Button colorScheme="gray" size="lg">
        {data.button}
      </Button>
    </VStack>
  );
};
