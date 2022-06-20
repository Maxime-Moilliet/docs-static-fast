import { Box, Icon, Link, Text, VStack } from "@chakra-ui/react";
import docsStaticConfig from "docs-static.config";
import React from "react";

export const Nav = () => {
  return (
    <Box as="nav" minH="full" w="full" mt={12}>
      <Box
        position="fixed"
        overflowY="scroll"
        borderRight="1px"
        borderColor="gray.100"
        h="full"
        maxH="84vh"
        w="270px"
        py={6}
      >
        {docsStaticConfig.docs.nav.map((el) =>
          el?.children?.length ? (
            <Box key={el.name}>
              <Text
                fontSize="md"
                fontWeight="semibold"
                mt={8}
                mb={2}
                color={`${docsStaticConfig.bases.theme}.500`}
              >
                {el.name}
              </Text>
              <VStack alignItems="left" spacing={2}>
                {el.children.map((v) => (
                  <Link
                    href={`/docs${v.to}`}
                    fontSize="sm"
                    color="gray.500"
                    fontWeight="300"
                    key={v.name}
                    _hover={{ textDecor: "none", color: "gray.700" }}
                  >
                    {v.name}
                  </Link>
                ))}
              </VStack>
            </Box>
          ) : (
            <Link
              mb={3}
              href={`/docs${el.to}`}
              key={el.name}
              fontSize="sm"
              color="gray.500"
              _hover={{
                textDecor: "none",
                color: "gray.700",
              }}
              display="flex"
              alignItems="center"
            >
              {el.icon && (
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  p={2}
                  bg={`${docsStaticConfig.bases.theme}.500`}
                  borderRadius={4}
                  mr={2}
                >
                  <Icon fontSize="14px" color="white" as={el.icon} />
                </Box>
              )}
              {el.name}
            </Link>
          )
        )}
      </Box>
    </Box>
  );
};
