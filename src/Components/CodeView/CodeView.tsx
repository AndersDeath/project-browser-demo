import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneDark } from "react-syntax-highlighter/dist/esm/styles/prism";

export const CodeView = ({ language, children }: any) => {
  return (
    <SyntaxHighlighter showLineNumbers language={language} style={oneDark}>
      {children}
    </SyntaxHighlighter>
  );
};
