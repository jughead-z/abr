import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import BlogDetails1 from "@/components/blog/BlogDetails1";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const BlogDetails = () => {
  return (
    <>
      <Head>
        <title>Blog Details</title>
        <meta name="description" content="Blog Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer1">
          <BlogDetails1 />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </>
  );
};

export default BlogDetails;
