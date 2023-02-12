// Next.js
import type { NextPage } from "next";
// import Link from "next/link";

// Mantine
import { AppShell, Header, Navbar } from "@mantine/core";
// import { Button } from "@mantine/core";

// 自作コンポーネント

const Value: NextPage = () => {
  return (
    <AppShell
      padding="md"
      navbar={
        <Navbar width={{ base: 300 }} height={500} p="xs">
          Navbar content
        </Navbar>
      }
      header={
        <Header height={60} p="xs">
          Header content
        </Header>
      }
      styles={(theme) => ({
        main: {
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      })}
    >
      Your application here
    </AppShell>
  );
};

export default Value;
