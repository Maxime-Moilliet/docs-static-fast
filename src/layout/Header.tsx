import {
  Box,
  Container,
  Heading,
  HStack,
  Text,
  Link as ChakraLink,
} from "@chakra-ui/react";
import React from "react";
import Link from "next/link";
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
          <Link href="/" passHref>
            <Heading fontSize="3xl" cursor="pointer">
              Logo
            </Heading>
          </Link>
          <HStack as={"nav"} spacing={4}>
            <Link href="/documentation" passHref>
              <ChakraLink
                mt={1}
                _hover={{
                  textDecor: "none",
                  color: `${docsStaticConfig.bases.theme}.500`,
                }}
                fontSize="15px"
                fontWeight="500"
              >
                Documentation
              </ChakraLink>
            </Link>
          </HStack>
        </HStack>
        <Box>search</Box>
      </Container>
    </Box>
  );
};
