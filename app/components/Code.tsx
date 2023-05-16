"use client"
import { FC } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

type CodeProps = {
  codeString: string;
  language: "javascript" | "typescript";
};

const Code: FC<CodeProps> = ({ codeString, language, ...props }) => {
  return (
    <SyntaxHighlighter
      style={vscDarkPlus}
      language={language}
      wrapLongLines={true}
      customStyle={{ fontSize: "0.8rem" }}
      PreTag="div"
      {...props}
    >
      {codeString}
    </SyntaxHighlighter>
  );
};

export default Code;
