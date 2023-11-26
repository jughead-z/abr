import RootLayout from "@/components/common/layout/RootLayout";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";
import AboutHero from "@/components/abr-about/AboutHero";
import AboutStory from "@/components/abr-about/AboutStory";
import AboutTeam from "@/components/abr-about/AboutTeam";
import Head from "next/head";

const About = () => {
  return (
    <div>
      <Head>
        <title>About</title>
        <meta name="description" content="About Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer1">
          <AboutHero />
          <AboutStory />
          <AboutTeam />
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default About;
