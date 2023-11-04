import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import CreativeAgencyHero from "@/components/hero/CreativeAgencyHero";
import CreativeAgencyAbout from "@/components/about/CreativeAgencyAbout";
import CreativeAgencyService from "@/components/service/CreativeAgencyService";
import CreativeAgencyAward from "@/components/award/CreativeAgencyAward";
import CreativeAgencyPortfolio from "@/components/portfolio/CreativeAgencyPortfolio";
import CreativeAgencyTeam from "@/components/team/CreativeAgencyTeam";
import CreativeAgencyBrand from "@/components/brand/CreativeAgencyBrand";
import CreativeAgencyBlog from "@/components/blog/CreativeAgencyBlog";
import CreativeAgencyCTA from "@/components/cta/CreativeAgencyCTA";
import AbrAbout from "@/components/abr/AbrAbout";
import AbrHero from "@/components/abr/abrHero";
import AbrVideo from "@/components/abr/abrVideo";
import AbrWork from "@/components/abr/abrWork";
import AbrTeam from "@/components/abr/abrTeam";
import AbrBlog from "@/components/abr/abrBlog";
import AbrCta from "@/components/abr/abrCta";
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
