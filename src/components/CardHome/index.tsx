import { Heading, Stack, Text } from "@chakra-ui/react";
import { DocsStaticConfigCardsType } from "docs-static.types";
import React from "react";

export const CardHome: React.FC<{ card: DocsStaticConfigCardsType }> = ({
  card,
}) => {
  return (
    <Stack as="article">
      <Heading fontSize="xl" as="h2">
        {card.title}
      </Heading>
      <Text pt={2} lineHeight="1.8rem">
        {card.content}
      </Text>
    </Stack>
  );
};
