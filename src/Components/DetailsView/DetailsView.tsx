import { useFileContext } from "../../FileContext";
import { extToString } from "../../Utils/ext";
import { CodeView } from "../CodeView/CodeView";
import "./DetailsView.scss";

export default function DetailsView() {
  const { file } = useFileContext();
  return (
    <div className="DetailsView">
      {file && <><div className="DetailsView__fileInfo">{file.title}</div><CodeView language={extToString(file.title)}>{file.content}</CodeView></> }
    </div>
  );
}
