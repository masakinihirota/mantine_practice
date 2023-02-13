import { SimpleGrid } from "@mantine/core";
import BlogCard from "./blogCard";
import type { BlogCardProps } from "./blogCard";

const article_headers_obj: BlogCardProps[] = [
  {
    title: "バックエンドをpythonで",
    date: "2022/10/10",
    abstract:
      "ブラウザの高機能化に従いweb開発はフロントエンドがかなりの比率を占めてきた。しかし",
    tags: ["python", "flask", "numpy"],
  },
  {
    title: "jsonとオブジェクトの区別",
    date: "2022/10/10",
    abstract: "Jsonとオブジェクトのハードコーディングで、はまった",
    tags: ["javascript", "JSON"],
  },
  {
    title: "jsonとオブジェクトの区別",
    date: "2022/10/10",
    abstract: "Jsonとオブジェクトのハードコーディングで、はまった",
    tags: ["javascript", "JSON"],
  },
];

const HomeMainCards = () => {
  const list_jsx_Cards = article_headers_obj.map((item, index) => (
    <BlogCard
      title={item.title}
      date={item.date}
      abstract={item.abstract}
      tags={item.tags}
    />
  ));

  return (
    <SimpleGrid m="md" cols={2}>
      {list_jsx_Cards}
    </SimpleGrid>
  );
};

export default HomeMainCards;
