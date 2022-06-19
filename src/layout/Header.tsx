import { Box, Container, Heading, HStack, Link } from "@chakra-ui/react";
import React from "react";
import NextLink from "next/link";
import docsStaticConfig from "docs-static.config";

export const Header = () => {
  return (
    <Box
      as="header"
      position="fixed"
      borderBottom="1px"
      borderColor="gray.300"
      bg="white"
      w="full"
    >
      <Container as={HStack} maxW="6xl" justifyContent="space-between" py={4}>
        <HStack alignItems="center" spacing={8}>
          <NextLink href="/" passHref>
            <Heading
              as={Link}
              fontSize="3xl"
              _hover={{ textDecor: "none" }}
              cursor="pointer"
            >
              Logo
            </Heading>
          </NextLink>
          <HStack as={"nav"} spacing={4}>
            <NextLink href="/docs" passHref>
              <Link
                fontSize="15px"
                fontWeight="500"
                mt={1}
                _hover={{
                  textDecor: "none",
                  color: `${docsStaticConfig.bases.theme}.500`,
                }}
              >
                Documentation
              </Link>
            </NextLink>
          </HStack>
        </HStack>
        <Box>search</Box>
      </Container>
    </Box>
  );
};
