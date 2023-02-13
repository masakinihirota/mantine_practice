import { Center, Text, Title } from "@mantine/core";
import EmblaCarousel from "./emblaCarousel";
import HomeMainCards from "./homeMainCards";
// import BlogCard from "./tips/blogCard"
// import HomeMainCards from "./homeMainCards"

const HomeMain = () => {
  return (
    <>
      <Center mt="lg">
        <EmblaCarousel />
      </Center>
      <Center mt="lg">
        <Title order={2}>プログラムのメモを書いていきます。</Title>
      </Center>
      <Center mt="sm">
        <Text>MantineとNextjsを使ったブログサイトです。</Text>
      </Center>

      <Center mt="sm">
        <HomeMainCards />
      </Center>
    </>
  );
};
export default HomeMain;
