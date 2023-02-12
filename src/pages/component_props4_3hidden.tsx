// Next.js
import type { NextPage } from "next";
// import Link from "next/link";

// Mantine
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Text,
  Burger,
  ScrollArea,
} from "@mantine/core";
import Link from "next/link";
import Head from "next/head";
// import { Button } from "@mantine/core";


// 自作コンポーネント

const Value: NextPage = () => {
  const [opened, setOpened] = useState(false);
  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
      <AppShell
        header={
          <Header height={40}>
            <Burger
              opened={opened}
              onClick={() => setOpened((naveMenu) => !naveMenu)}
            />
          </Header>
        }
        navbar={
          // <Navbar width={nav_width} hidden={!opened}>
          //   hidden属性の追加
          // </Navbar>

          <Navbar height={200} p="xs" width={{ base: 300 }} hidden={!opened}>
            <Navbar.Section>Header with logo</Navbar.Section>

            <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
              <br />
              <Link href="/">Home</Link>
            </Navbar.Section>
            <Navbar.Section>Footer with user</Navbar.Section>
          </Navbar>
        }
        footer={<Footer height={30}>フッター。高さ設定必須。</Footer>}
      >
        <Text>メインコンテンツ</Text>
      </AppShell>
    </>
  );
};

export default Value;
