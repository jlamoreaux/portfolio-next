import Image from "next/image";
import Code from "./Code";
import { PostBody } from "../lib/types";

const createCodeBlock = (text: string, key?: string) => {
  return <Code codeString={text} language="typescript" key={key} />;
};

const getHeadingElement = (style: string) => {
  switch (style) {
    case "h1":
      return "h1";
    case "h2":
      return "h2";
    case "h3":
      return "h3";
    case "h4":
      return "h4";
    case "h5":
      return "h5";
    case "h6":
      return "h6";
    default:
      return "h1";
  }
};

const generateJSXFromBlock = (block: PostBody) => {
  if ("asset" in block) {
    return (
      <Image
        src={block.asset.url}
        alt={block.alt}
        className="w-full max-w-3xl mx-auto my-8"
      />
    );
  }
  if ("text" in block.children[0]) {
    const paragraphs = block.children.map((child) => {
      if ("text" in child) {
        let text = child.text;
        if (child.style === "code" || text.includes("<code>")) {
          text = text.replace(/<code>/g, "");
          text = text.replace(/<\/code>/g, "");
          return createCodeBlock(text, child._key);
        }
        if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(block.style)) {
          const Heading = getHeadingElement(block.style);
          return (
            <Heading key={child._key} id={child._key}>
              {text}
            </Heading>
          );
        }
        text = child.text.replace(/\r?\n/g, "<br />");
        return <p key={child._key}>{text}</p>;
      }
      return null;
    });
    return paragraphs;
  }
  return null;
};

export const generateTextFromBlocks = (block: PostBody[]) => {
  const body = block.map((block, index) => {
    return <div key={index}> {generateJSXFromBlock(block)} </div>;
  });

  const subheadings = block
    .filter((block) =>
      ["h1", "h2", "h3", "h4", "h5", "h6"].includes(block.style)
    )
    .map((block) => {
      return {
        title: "text" in block.children[0] ? block.children[0].text : "",
        key: block.children[0]._key,
      };
    });

  return { body, subheadings };
};
