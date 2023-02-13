// Next.js
import type { NextPage } from "next";
import Link from "next/link";
// Mantine
import { Button } from "@mantine/core";
// 自作コンポーネント
import StylesAPI from "../components/component_props3";

const Value: NextPage = () => {
  return (
    <>
      <div className="text-green-700">
        component_propsページ
        <Link href="/">
          <Button className="text-purple-600">TOPに移動</Button>
        </Link>
        <StylesAPI />
      </div>
    </>
  );
};

export default Value;
