// Next.js
import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";

// tRPC
import { api } from "../utils/api";

// Mantine
import { Button } from "@mantine/core";

const Home: NextPage = () => {
  const hello = api.example.hello.useQuery({ text: "from tRPC" });

  return (
    <>
      <Head>
        <title>Mantine Practice App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-2xl text-violet-700">
        tRPCのデモ <br />
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </div>
      <br />
      <Link href="./nav/basic_01">
        <Button className="text-2xl text-blue-600">
          Link: Mantine 入門 01 AppShell 基本的な使い方 01
        </Button>
      </Link>{" "}
      <br />
      <Link href="./nav/basic_02">
        <Button className="text-2xl text-blue-600">
          Link: Mantine 入門 02
        </Button>
      </Link>
    </>
  );
};

export default Home;
