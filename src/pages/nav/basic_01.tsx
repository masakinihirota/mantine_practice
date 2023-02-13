// Next.js
import type { NextPage } from "next";
import Link from "next/link";
// Mantine
import { Button } from "@mantine/core";
// 自作コンポーネント

const Value: NextPage = () => {
  return (
    <>
      <div className=" text-green-700">
        <Link href="/">
          <Button className="text-2xl text-blue-600">TOPに移動</Button>
        </Link>
      </div>
    </>
  );
};

export default Value;
