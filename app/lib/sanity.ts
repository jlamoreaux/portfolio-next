import { createClient } from "next-sanity";
import { PostBody } from "./types";
import { FC } from "react";

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-10-21",
  useCdn: false,
  token: process.env.SANITY_TOKEN,
});

export default client;

type GenerateSanityImageUrlProps =
  | {
      imageId: string;
      width: number;
      height: number;
    }
  | {
      imageId: string;
    };

export const generateSanityImageUrl = (params: GenerateSanityImageUrlProps) => {
  let { imageId } = params;
  if (!imageId) return "";
  let dimensions = "";
  if ("width" in params && "height" in params) {
    dimensions = `?w=${params.width}&h=${params.height}`;
  }
  // remove 'image-' from the imageId
  imageId = imageId.slice(6);
  // find the first dash in the imageId starting from the end and separate the imageId from the extension and remove the dash
  const imageIdWithoutExtension = imageId.slice(0, imageId.lastIndexOf("-"));
  const imageExtension = imageId.slice(imageId.lastIndexOf("-") + 1);

  const url = `https://cdn.sanity.io/images/${
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
  }/${
    process.env.NEXT_PUBLIC_SANITY_DATASET
  }/${imageIdWithoutExtension}.${imageExtension}${
    dimensions ? "?" + dimensions : ""
  }`;

  return url;
};
