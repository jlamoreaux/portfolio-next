import { groq } from "next-sanity";
import client from "./sanity";
import { Category, LandingPageData, Post } from "./types";

type StaticPath = {
  params: {
    slug: string;
  };
  locale?: string | undefined;
};

export const getPost = async ({ params }: StaticPath) => {
  const { slug } = params || {}; // set default value of {} in case params is undefined

  const post = (await client.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      title,
      "slug": slug.current,
      mainImage,
      author->{name,image},
      publishedAt,
      excerpt,
      body
    }`,
    { slug }
  )) as Post;

  return post;
};

export const getAllPostHeadings = async () => {
  let posts: Post[];
  try {
    posts = await client.fetch(
      `*[_type == "post"]{
      title,
      "slug": slug.current,
      author->{name,image},
      publishedAt,
      categories[]->{title, "slug": slug.current},
      mainImage,
      description,
    }`
    );
    return posts;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllCategories = async () => {
  console.log("getAllCategories");
  let categories: Category[] = [];
  try {
    categories = await client.fetch(
      `*[_type == "category"]{
      title,
      "slug": slug.current,
    }`
    );
    console.log("categories", categories);
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
};

export const getAllProjects = async () => {
  const categories = await client.fetch(
    `*[_type == "project"]{
      title,
      "slug": slug.current,
      coverImage,
      "description": description,
      sourceCodeUrl,
      liveDemoUrl,
    }`
  );

  return categories;
};

export const getHomePageData = async (): Promise<LandingPageData> => {
  const query = `*[_type == "landingPage"][0] {
      welcomeText,
      welcomeSubtext,
      callToActionLink,
    }`;
  const data = await client.fetch(query);
  console;
  return data;
};

export const getWorkExperience = async () => {
  const query = `*[_type == "workExperience"]{
    title,
    company,
    startDate,
    endDate,
    description,
  }`;
  const data = await client.fetch(query);
  return data;
};
