import { useState } from "react";
import "./TreeView.scss";
import data from "../../Data/folders.json";

interface Item {
  id: string;
  fileName: string;
  children: any[];
  minimized?: boolean;
}

const Wrapper = ({ children }: any) => {
  return <ul>{children}</ul>;
};

const Item = ({ fileName, minimized, children }: Item) => {
  const [visible, setVisible] = useState(!minimized);
  let style = "";
  if (fileName.toLowerCase().indexOf(".ts") !== -1) {
    style = "typescript";
  } else if (
    fileName.toLowerCase().indexOf(".scss") !== -1 ||
    fileName.toLowerCase().indexOf(".sass") !== -1
  ) {
    style = "sass";
  } else if (fileName.toLowerCase().indexOf(".js") !== -1) {
    style = "javascript";
  } else if (fileName.toLowerCase().indexOf(".json") !== -1) {
    style = "json";
  } else if (fileName.toLowerCase().indexOf(".md") !== -1) {
    style = "markdown";
  } else {
    style = "folder";
  }
  return (
    <li>
      {style === "folder" ? (
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
      <Wrapper>
        <Item key={data.id} {...data} />
      </Wrapper>
    </div>
  );
}
