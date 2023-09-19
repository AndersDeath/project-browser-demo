import { FilesData, files } from "../../Data/files";
import { useFileContext } from "../../FileContext";
import { extToString } from "../../Utils/ext";
import { CodeView } from "../CodeView/CodeView";
import { IItem } from "../TreeView/TreeView";
import "./DetailsView.scss";

export default function DetailsView() {
  const { file } = useFileContext();
  const filesData = new FilesData(files);
  let fileText = file?.title;
  if (file) {
    fileText = './' + filesData
      .findNodeAndParents(filesData.structure, file.id)
      ?.map((item: IItem) => {
        return item.fileName;
      }).slice(1)
      .join("/");
  }
  return (
    <div className="DetailsView">
      {file && (
        <>
          <div className="DetailsView__fileInfo">{fileText}</div>
          <CodeView language={extToString(file.title)}>{file.content}</CodeView>
        </>
      )}
    </div>
  );
}
