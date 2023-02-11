import type { NextPage } from "next";
import {
  Button,
  Container,
  MantineProvider,
  Slider,
  Text,
} from "@mantine/core";

const StylesAPI: NextPage = () => {
  return (
    <>
      <Container>
        <Slider
          size={10}
          py={30}
          // my={30}
          defaultValue={30}
          marks={[
            { value: 20, label: "20%" },
            { value: 50, label: "50%" },
            { value: 80, label: "80%" },
          ]}
          // スライダーのつまみにスタイルを追加1
          // styles={{ thumb: { backgroundColor: "red" } }}
          // スライダーのつまみにスタイルを追加2
          styles={(theme) => ({
            markLabel: {
              color: theme.colors.red,
              fontFamily: "fantasy",
            },
          })}
        />
      </Container>
      <Container>Default container</Container>
      <Container size="xs" px="xs">
        xs container with xs horizontal padding
      </Container>
      <Container size={200} px={0}>
        200px container with 0px horizontal padding
      </Container>
      <Container>
        <Text
          sx={{
            color: "#008080",
            "&:hover": {
              backgroundColor: "#F00000",
            },
          }}
        >
          My custom text
        </Text>
      </Container>
      <MantineProvider
        theme={{ spacing: { xs: 15, sm: 20, md: 25, lg: 30, xl: 40 } }}
      >
        <Slider my={30} />
      </MantineProvider>
      {/* マージン、パディングの例を示します。 */}
      <Text>マージン、パディングの例を示します。</Text>
      <Text>マージンはボックスの外側に隙間や間隔を作ります。</Text>
      <Text>パディングは内側に隙間や間隔を作ります。</Text>
      <Text sx={{ backgroundColor: "#80FFFF" }}>default</Text>
      <Text m={10} sx={{ backgroundColor: "#80FFFF" }}>
        margin 10px
      </Text>
      <Text m={20} sx={{ backgroundColor: "#80FFFF" }}>
        margin 20px
      </Text>
      <Text p={10} mb={5} sx={{ backgroundColor: "#80FFFF" }}>
        padding 10px margin-bottom 5px
      </Text>
      <Text p={20} mb={5} sx={{ backgroundColor: "#80FFFF" }}>
        padding 20px margin-bottom 5px
      </Text>
      <Button ml="xs"> ml extra small</Button>
      <Button ml="sm"> ml small</Button>
      <Button ml="md"> ml middle </Button>
      <Button ml="lg"> ml large </Button>
      <Button ml="xl"> ml extra large </Button>
      <Container mt="md">
        <Button ml="md"> ml md</Button>
        <Button ml="-md" sx={{ backgroundColor: "#F00" }}>
          {" "}
          ml md * -1
        </Button>
      </Container>
      11111
      <Container mt="md">
        <Button color="blue">blue</Button>
        <Button color="blue.0">blue.0</Button>
        <Button color="blue.6">blue.6</Button>
        <Button color="blue.9">blue.9</Button>
        <Button color="red">red</Button>
        <Button color="gray">gray</Button>
        <Button color="pink">pink</Button>
        <Button color="teal">teal</Button>
      </Container>
    </>
  );
};

export default StylesAPI;
