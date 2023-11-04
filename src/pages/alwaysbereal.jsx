import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import AbrAbout from "@/components/abr/AbrAbout";
import AbrHero from "@/components/abr/AbrHero";
import AbrVideo from "@/components/abr/AbrVideo";
import AbrWork from "@/components/abr/AbrWork";
import AbrTeam from "@/components/abr/AbrTeam";
import AbrBlog from "@/components/abr/AbrBlog";
import AbrCta from "@/components/abr/AbrCta";
const Abr = () => {
  return (
    <div>
      <Head>
        <title>Always be real</title>
        <meta name="description" content="Creative Agency Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer1">
          <AbrHero />
          <AbrAbout/>
          <AbrVideo/>
          <AbrWork/>
          <AbrTeam />
          <AbrBlog/>
          <AbrCta />
        </RootLayout>
      </main>
    </div>
  );
};

export default Abr;
