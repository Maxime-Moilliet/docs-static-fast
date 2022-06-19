import { Button, Heading, Text, VStack, Link } from "@chakra-ui/react";
import {
  DocsStaticConfigBannerType,
  DocsStaticConfigBasesType,
} from "docs-static.types";
import NextLink from "next/link";
import React from "react";

export const Banner: React.FC<{
  data: DocsStaticConfigBannerType;
  theme: Omit<DocsStaticConfigBasesType, "theme">;
}> = ({ data, theme }) => {
  return (
    <VStack as="section" py={16} px={4} spacing={8} bg={`${theme}.500`}>
      <Heading textAlign="center" as="h1" size="3xl" color="white">
        {data.title}
      </Heading>
      <Text textAlign="center" fontSize="lg" py={5} color="white">
        {data.content}
      </Text>
      <NextLink href="/docs" passHref>
        <Button
          as={Link}
          colorScheme="gray"
          size="lg"
          style={{ textDecoration: "none" }}
        >
          {data.button}
        </Button>
      </NextLink>
    </VStack>
  );
};
