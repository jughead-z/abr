import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import TeamDetails7 from "@/components/team/TeamDetails7";
import DigitalAgencyCTA from "@/components/cta/DigitalAgencyCTA";

const TeamDetails = () => {
  return (
    <div>
      <Head>
        <title>Team Details</title>
        <meta name="description" content="Team Details Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer1">
          <TeamDetails7/>
          <DigitalAgencyCTA />
        </RootLayout>
      </main>
    </div>
  );
};

export default TeamDetails;
