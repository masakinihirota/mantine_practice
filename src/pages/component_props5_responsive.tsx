import type { NextPage } from "next";
import Head from "next/head";
import { AppShell } from "@mantine/core";
import HomeHeader from "../components/home/header";
import HomeNavbar from "../components/home/navbar";
import HomeFooter from "../components/home/footer";
import HomeMain from "../components/home/mainHeader";
import { useState, useEffect } from "react";
import { useViewportSize } from "@mantine/hooks";
import { useToggle } from "@mantine/hooks";

const Home: NextPage = () => {
  const { height, width } = useViewportSize();
  const [navbarOpened, toggleNavbarOpened] = useToggle([true, false]);
  const onoffNavbar = () => {
    toggleNavbarOpened();
  };

  useEffect(() => {
    console.log(width);

    if (width < 600) {
      toggleNavbarOpened(false);
    } else {
      toggleNavbarOpened(true);
    }
    //document.title = `${width}${navbarOpened}`
  }, [width]);

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppShell
        header={
          <HomeHeader navbarOpened={navbarOpened} onoffNavbar={onoffNavbar} />
        }
        // navbar={<HomeNavbar />}
        navbar={<HomeNavbar navbarOpened={navbarOpened} />}
        footer={<HomeFooter />}
      >
        <HomeMain />
      </AppShell>
    </>
  );
};

export default Home;
