import { useState } from "react";
import "./TreeView.scss";
import { FilesData, files } from "../../Data/files";
import { useFileContext } from "../../FileContext";
import { extToString } from "../../Utils/ext";

const Files = new FilesData(files);

export interface IItem {
  id: string;
  fileName: string;
  children: any[];
  minimized?: boolean;
}

const Item = ({ id, fileName, minimized, children }: IItem) => {
  const [visible, setVisible] = useState(!minimized);
  const { setFile } = useFileContext();

  let style = `item ${extToString(fileName)}`;

  return (
    <li>
      {style.indexOf("folder") !== -1 ? (
        visible ? (
          <span className="folder-arrow down">{">"}</span>
        ) : (
          <span className="folder-arrow">{">"}</span>
        )
      ) : (
        ""
      )}
      <span
        className={style}
        onClick={() => {
          console.log(Files.get(id));
          const file = Files.get(id);
          if (file) {
            setFile(file);
          }
          if (children) {
            setVisible(!visible);
          }
        }}
      >
        {fileName}
      </span>
      {children && visible && (
        <ul>
          {children.map((el: any) => {
            return <Item key={el.id} {...el} />;
          })}
        </ul>
      )}
    </li>
  );
};

export default function TreeView() {
  return (
    <div className="TreeView">
      <ul>
        <Item key={Files.structure.id} {...Files.structure} />
      </ul>
    </div>
  );
}
