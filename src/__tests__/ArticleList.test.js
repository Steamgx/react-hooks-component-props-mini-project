import "@testing-library/jest-dom";
import { render } from "@testing-library/react";
import ArticleList from "../components/ArticleList";

const posts = [
  {
    id: 1,
    title: "Components 101",
    date: "December 15, 2020",
    preview: "Setting up the building blocks of your site",
  },
  {
    id: 2,
    title: "React Data Flow",
    date: "December 11, 2020",
    preview: "Passing props is never passé",
  },
  {
    id: 3,
    title: "Function Components vs Class Components",
    date: "December 10, 2020",
    preview: "React, meet OOJS.",
  },
];

test("renders a <main> element", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main")).toBeInTheDocument();
});

test("renders a Article component for each post passed as a prop", () => {
  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main").children).toHaveLength(3);
});
test("renders an Article component for each post passed as a prop", () => {
  const posts = [
    { title: "Post 1", date: "2025-01-01" },
    { title: "Post 2", date: "2025-02-02" },
    { title: "Post 3", date: "2025-03-03" },
  ];

  const { container } = render(<ArticleList posts={posts} />);
  expect(container.querySelector("main").children).toHaveLength(3); // Ensure 3 articles are rendered
});
