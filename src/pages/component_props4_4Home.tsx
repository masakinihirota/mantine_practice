import type { NextPage } from "next";
import Head from "next/head";
import { AppShell } from "@mantine/core";
import HomeHeader from "../components/home/header";
import HomeNavbar from "../components/home/navbar";
import HomeFooter from "../components/home/footer";
import HomeMain from "../components/home/mainHeader";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppShell
        header={<HomeHeader />}
        navbar={<HomeNavbar />}
        footer={<HomeFooter />}
      >
        <HomeMain />
      </AppShell>
    </>
  );
};

export default Home;
