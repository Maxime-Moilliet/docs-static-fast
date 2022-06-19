import type { NextPage } from "next";
import React from "react";
import { allPages, Page, allDocuments } from "contentlayer/generated";
import { useMDXComponent } from "next-contentlayer/hooks";
import Head from "next/head";

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

  console.log(allPages);

  return (
    <div>
      <Head>
        <title>{page.title}</title>
      </Head>

      <main>
        <MdxBody />
      </main>

      <aside>
        <ul>
          {allPages.map((page) => (
            <a key={page._id} href={`/docs/${page._raw.flattenedPath}`}>
              {page.title}
            </a>
          ))}
        </ul>
      </aside>
    </div>
  );
};

export default Docs;
