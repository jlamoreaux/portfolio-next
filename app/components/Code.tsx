import { PortableTextComponentProps } from "@portabletext/react";
import React, { FC } from "react";
import Refractor from "react-refractor";
import js from "refractor/lang/javascript";
import ts from "refractor/lang/typescript";

Refractor.registerLanguage(js);
Refractor.registerLanguage(ts);

type CodeProps = PortableTextComponentProps<{
  code: string;
  language?: string;
  highlightedLines?: number[];
}>;

const Code: FC<CodeProps> = ({value}) => {
  return (
      <Refractor
        language={value.language || "js"}
        value={value.code}
        markers={value.highlightedLines || []}
        className="text-sm"
      />
  );
};

export default Code;
