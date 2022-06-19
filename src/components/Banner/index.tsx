import { Button, Heading, Text, VStack } from "@chakra-ui/react";
import {
  DocsStaticConfigBannerType,
  DocsStaticConfigBasesType,
} from "docs-static.types";
import React from "react";

export const Banner: React.FC<{
  data: DocsStaticConfigBannerType;
  theme: Omit<DocsStaticConfigBasesType, "theme">;
}> = ({ data, theme }) => {
  return (
    <VStack as="section" py={16} spacing={8} bg={theme + ".500"}>
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
