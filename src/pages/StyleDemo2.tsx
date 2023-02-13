import type { NextPage } from "next";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  red: {
    ref: getRef("red"),
    color: "#FF8000",
  },
  dev: {
    [`& .${getRef("red")}`]: {
      // [& .red]:のイメージ
      color: "#FF0000",
      fontWeight: "bold",
    },
  },
}));

const StyleDemo: NextPage = () => {
  const { classes } = useStyles();
  return (
    <>
      <p className={classes.red}>out</p>
      <div className={classes.dev}>
        <p className={classes.red}>in</p>
      </div>
      <p className={classes.red}>out</p>
    </>
  );
};

export default StyleDemo;
