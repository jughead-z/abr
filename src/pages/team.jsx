import Head from "next/head";
import RootLayout from "@/components/common/layout/RootLayout";
import Team1 from "@/components/team/Team1";


const Team = () => {
  return (
    <div>
      <Head>
        <title>Team</title>
        <meta name="description" content="Team Description" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <main>
        <RootLayout header="header4" footer="footer1">
          <Team1/>
        </RootLayout>
      </main>
    </div>
  );
};

export default Team;
