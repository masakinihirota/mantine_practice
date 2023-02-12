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
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="text-2xl text-orange-700">
        tRPCのデモ <br />
        {hello.data ? hello.data.greeting : "Loading tRPC query..."}
      </div>
      <Link href="/value">
        <Button className=" text-blue-800">
          Link: value(名前は適当)ページに移動
        </Button>
      </Link>
      <Link href="/component_props">
        <Button my="200" className=" text-blue-800">
          Link: Mantine 入門1 セットアップとリンクの貼り方、テーマの概要 <br />
          Link: Mantine 入門2 スタイルを書く
        </Button>
      </Link>
      <Link href="/component_props3">
        <Button className=" text-blue-800">
          Link: Mantine 入門3 主要パーツ一覧
        </Button>
      </Link>{" "}
      <br/>
      <Link href="/component_props4">
        <Button className=" text-blue-800">
          Link: Mantine 入門4 主要パーツ一覧
        </Button>
      </Link>
    </>
  );
};

export default Home;
