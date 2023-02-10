// Next.js
import type { NextPage } from "next";
import Link from "next/link";
// Mantine
import { Button } from "@mantine/core";
import { MantineProvider } from "@mantine/core";
// 自作コンポーネント
import SomePart from "../components/somepart";

const valueTheme = {
  fontFamily: "Roboto",
  defaultGradient: {
    from: "orange",
    to: "red",
    deg: 45,
  },
};
const Value: NextPage = () => {
  return (
    <>
      <div className="text-green-700">
        Valueページ
        <Link href="/">
          <Button className="text-purple-600">TOPに移動</Button>
        </Link>
        <MantineProvider theme={{ colorScheme: "dark" }}>
          <SomePart label="hello" name="type-text" />
        </MantineProvider>
      </div>
    </>
  );
};

export default Value;
