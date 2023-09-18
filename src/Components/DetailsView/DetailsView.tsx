import { useFileContext } from "../../FileContext";
import "./DetailsView.scss";

export default function DetailsView() {
  const { file, setFile } = useFileContext();

  return (
    <div className="DetailsView">
      <h1>Details</h1>
      {file && <div>{file.content}</div> }
    </div>
  );
}
