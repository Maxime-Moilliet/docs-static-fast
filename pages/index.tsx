import React, { useEffect } from "react";

import { Center } from "@chakra-ui/react";
import Head from "next/head";
import { useRouter } from "next/router";

import { Loader } from "@/components";

const Index = () => {
  const router = useRouter();
  useEffect(() => {
    router.push("/app");
  }, [router]);

  return (
    <>
      <Head>
        <title>Docs static fast</title>
      </Head>
      <Center flex="1">
        <Loader />
      </Center>
    </>
  );
};
export default Index;
