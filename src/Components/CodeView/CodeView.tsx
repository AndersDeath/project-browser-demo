import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';
interface CodeViewProps {
  language: string;
  children: React.ReactNode;
}
export const CodeView = ({ language, children }: CodeViewProps) => {
  return (
    <SyntaxHighlighter wrapLongLines language={language} style={oneDark}>
      {Array.isArray(children) ? children : [children]}
    </SyntaxHighlighter>
  );
};
