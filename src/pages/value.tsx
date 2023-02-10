// Next.js
import { type NextPage } from "next";
import Link from "next/link";
// Mantine
import { Button } from "@mantine/core";

const Value: NextPage = () => {
  return (
    <>
      <div className="text-green-300">
        Valueページ
        <Link href="/">
          <Button>TOPに移動</Button>
        </Link>
        テキスト
      </div>
    </>
  );
};

export default Value;
