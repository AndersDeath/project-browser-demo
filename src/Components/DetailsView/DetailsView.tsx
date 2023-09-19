import { useFileContext } from "../../FileContext";
import { CodeView } from "../CodeView/CodeView";
import "./DetailsView.scss";

export default function DetailsView() {
  const { file } = useFileContext();

  return (
    <div className="DetailsView">
      {file && <CodeView language="typescript">{file.content}</CodeView> }
    </div>
  );
}
