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
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
} from "@mantine/core";
// import { Button } from "@mantine/core";

// 自作コンポーネント

const Value: NextPage = () => {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        // <Navbar
        //   p="md"
        //   hiddenBreakpoint="sm"
        //   hidden={!opened}
        //   width={{ sm: 200, lg: 300 }}
        // >
        //   <Text>Application navbar</Text>
        // </Navbar>
        <Navbar height={300} p="xs" width={{ base: 250 }}>
          <Navbar.Section>{"Header with logo"}</Navbar.Section>
          <Navbar.Section grow mt="md">
            {"Links sections"}
          </Navbar.Section>
          <Text>Application navbar</Text>
          <Navbar.Section>{"Footer with user"}</Navbar.Section>
        </Navbar>
      }
      aside={
        <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
          <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            <Text>Application sidebar</Text>
          </Aside>
        </MediaQuery>
      }
      footer={
        <Footer height={60} p="md" hidden>
          Application footer
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <div
            style={{ display: "flex", alignItems: "center", height: "100%" }}
          >
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </div>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
};

export default Value;
