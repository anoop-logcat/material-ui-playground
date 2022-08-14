import { CssBaseline } from "@mui/material";
import Head from "next/head";
import { ReactNode } from "react";

type MainLayoutPropsType = {
  children: ReactNode;
  title?: string;
  description?: string;
  thumbnailImage?: string;
  url?: string;
};

function MainLayout({
  children = <></>,
  title = "MUI - Playground",
  description = "A tutorial for MUI.",
  thumbnailImage = "/vercel.svg",
  url = "http://localhost:3000",
}: MainLayoutPropsType) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="MUI - Playground" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={thumbnailImage} />
        <meta property="og:url" content={url} />
      </Head>
      <main>
        <CssBaseline />
        {children}
      </main>
    </>
  );
}

export default MainLayout;
