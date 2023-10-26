import { PortableText, PortableTextProps, PortableTextReactComponents } from "@portabletext/react";
import Code from "./Code";

const SanityText = ({ value }: PortableTextProps) => {
  const components: Partial<PortableTextReactComponents> = {
  types: {
    code: Code,
  },
  block: {
    normal: ({ children }) => {
      return <p className="mb-4">{children}</p>;
    }
  }
};
  return <PortableText components={components} value={value} />;
};

export default SanityText