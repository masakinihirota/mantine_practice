import type { NextPage } from "next";
import { createStyles } from "@mantine/core";

const useStyles = createStyles((theme, _params, getRef) => ({
  wrapper: {
    backgroundColor: theme.colors.blue[0],
    maxWidth: 400,
    width: "100%",
    height: 200,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: theme.radius.sm,
  },
  child: {
    backgroundColor: theme.colors.gray[0],
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
  },
}));

const StyleDemo: NextPage = () => {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div className={classes.child}>createStyles</div>
    </div>
  );
};

export default StyleDemo;
