import { type AppType } from "next/app";
import { api } from "../utils/api";
import Head from "next/head";
import { MantineProvider } from "@mantine/core";
import "../styles/globals.css";

const MyApp: AppType = (props) => {
  const { Component, pageProps } = props;
  return (
    <>
      <Head>
        <title>Page title</title>
        <meta name="viewport" content=" initial-scale=1, width=device-width" />
      </Head>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Component {...pageProps} />
      </MantineProvider>
    </>
  );
};

export default api.withTRPC(MyApp);
