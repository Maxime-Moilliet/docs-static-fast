import type { NextPage } from "next";
import React from "react";
import { allPages, Page } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";
import { Box, Container, HStack } from "@chakra-ui/react";
import docsStaticConfig from "docs-static.config";
import { Nav } from "@/components";

export async function getStaticProps({ params: { slug = [] } }) {
  const pagePath = "/docs/" + slug.join("/");

  return {
    props: {
      page: allPages.find((p) => p.url === pagePath),
    },
  };
}

export async function getStaticPaths() {
  const paths = allPages.map((p) => p.url);

  return { paths, fallback: false };
}

const Docs: NextPage<{ page: Page }> = ({ page }) => {
  const MdxBody = useMDXComponent(page.body.code);

  return (
    <div>
      <Head>
        <title>{page.title}</title>
      </Head>

      <Container as="main" maxW="6xl">
        <HStack gap={6} alignItems="flex-start">
          <Nav />
          <Box py={16} px={8} className="docs-content">
            <MdxBody />
          </Box>
        </HStack>
      </Container>
    </div>
  );
};

export default Docs;
