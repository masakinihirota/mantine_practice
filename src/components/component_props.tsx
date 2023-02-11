import type { NextPage } from "next";
import { Container, Slider } from "@mantine/core";

const StylesAPI: NextPage = () => {
  return (
    <Container>
      <Slider
        defaultValue={30}
        marks={[
          { value: 20, label: "20%" },
          { value: 50, label: "50%" },
          { value: 80, label: "80%" },
        ]}
      />
    </Container>
  );
};

export default StylesAPI;
