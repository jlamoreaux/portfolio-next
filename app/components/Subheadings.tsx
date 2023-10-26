import { PostBody } from "../lib/types";

export const generateSubheadings = (block: PostBody[]) => {
  return block
    ?.filter((block) =>
      ["h2"].includes(block.style)
    )
    .map((block) => {
      return {
        title: "text" in block.children[0] ? block.children[0].text : "",
        key: block.children[0]._key,
      };
    });
};
