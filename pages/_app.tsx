import type { AppProps } from "next/app";
import { Providers } from "@/Providers";
import { Box, Text } from "@chakra-ui/react";
import Head from "next/head";
import { Viewport } from "@/components";
import { ErrorBoundary } from "@/errors";

const AppDevHint = () => {
  const envName =
    process.env.NODE_ENV === "development"
      ? "Development"
      : process.env.NEXT_PUBLIC_DEV_ENV_NAME;

  if (!envName) {
    return null;
  }

  return (
    <Box
      zIndex="100"
      position="fixed"
      top="0"
      insetStart="0"
      insetEnd="0"
      h="2px"
      bg="orange.400"
    >
      <Text
        position="fixed"
        top="0"
        insetStart="4"
        bg="orange.400"
        color="orange.900"
        fontSize="0.6rem"
        fontWeight="bold"
        px="1"
        borderBottomStartRadius="sm"
        borderBottomEndRadius="sm"
        textTransform="uppercase"
      >
        {envName}
      </Text>
    </Box>
  );
};

const AppHead = () => {
  return (
    <Head>
      <title>Docs static fast</title>
      <meta
        name="viewport"
        content="width=device-width,initial-scale=1,viewport-fit=cover"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
    </Head>
  );
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Providers>
      <AppHead />
      <ErrorBoundary>
        <Viewport>
          <Component {...pageProps} />
        </Viewport>
        <AppDevHint />
      </ErrorBoundary>
    </Providers>
  );
}

export default MyApp;
