import { useContext, useState } from "react";
import "./TreeView.scss";
import data from "../../Data/folders.json";
import { FilesData, files } from "../../Data/files";
import { FileContext, useFileContext } from "../../FileContext";
import { extToString } from "../../Utils/ext";

const Files = new FilesData(files);

interface Item {
  id: string;
  fileName: string;
  children: any[];
  minimized?: boolean;
}

const Wrapper = ({ children }: any) => {
  return <ul>{children}</ul>;
};

const Item = ({ id, fileName, minimized, children }: Item) => {
  const [visible, setVisible] = useState(!minimized);
  const { file, setFile } = useFileContext();

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
        <Wrapper>
          {children.map((el: any) => {
            return <Item key={el.id} {...el} />;
          })}
        </Wrapper>
      )}
    </li>
  );
};

export default function TreeView() {
  return (
    <div className="TreeView">
      <Wrapper minimized={data.minimized}>
        <Item key={data.id} {...data} />
      </Wrapper>
    </div>
  );
}
