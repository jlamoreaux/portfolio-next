import { groq } from "next-sanity";
import client from "./sanity";
import {
  Category,
  LandingPageData,
  Post,
  PostBodyImage,
  Project,
} from "./types";
import { cache } from "react";
import { PostBody } from "./types";

export const getPost = async (slug: string) => {
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

export const getAllPostHeadings = cache(async () => {
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
});

export const getAllCategories = cache(async () => {
  let categories: Category[] = [];
  try {
    categories = await client.fetch(
      `*[_type == "category"]{
      title,
      "slug": slug.current,
    }`
    );
    return categories;
  } catch (error) {
    console.error(error);
    return [];
  }
});

export const getAllProjects = async () => {
  const projects: Project[] = await client.fetch(
    `*[_type == "project"]{
      title,
      "slug": slug.current,
      coverImage,
      "description": description,
      sourceCodeUrl,
      liveDemoUrl,
    }`
  );

  return projects;
};

export const getHomePageData = async (): Promise<LandingPageData> => {
  const query = `*[_type == "landingPage"][0] {
      welcomeText,
      welcomeSubtext,
      callToActionLink,
    }`;
  const data = await client.fetch(query);
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

export const getAboutMe = async () => {
  let data: { title: string; aboutMeText: PostBody[]; image: PostBodyImage } =
    {} as any;
  const query = `*[_type == "aboutMe"]{
    title,
    aboutMeText,
    image,
  }`;
  try {
    const response = await client.fetch(query);
    data = response[0];
    console.log(data);
  } catch (error) {
    console.error(error);
  }
  return data;
};
