import { Banner } from "@/components";
import docsStaticConfig from "docs-static.config";
import React from "react";

export const HomePage = () => {
  return <Banner data={docsStaticConfig.home.banner} />;
};
