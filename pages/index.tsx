import React from "react";
import { Container, SimpleGrid } from "@chakra-ui/react";
import { Banner, CardHome } from "@/components";
import docsStaticConfig from "docs-static.config";

const Home = () => {
  return (
    <>
      <Banner
        data={docsStaticConfig.home.banner}
        theme={docsStaticConfig.bases.theme}
      />
      {docsStaticConfig.home.cards?.length && (
        <Container maxW="6xl" py={16}>
          <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} spacing={16}>
            {docsStaticConfig.home.cards?.map((card, idx) => (
              <CardHome key={idx} card={card} />
            ))}
          </SimpleGrid>
        </Container>
      )}
    </>
  );
};
export default Home;
