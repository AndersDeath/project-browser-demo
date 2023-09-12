import { useState } from "react";
import "./App.css";
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
  if (fileName.indexOf(".server.ts") !== -1) {
    style = "server";
  } else if (fileName.indexOf(".client.ts") !== -1) {
    style = "client";
  } else {
    style = "folder";
  }
  return (
    <li>
      {style === "folder" ? (visible ? ">" : '-') : ""}
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

export default function App() {
  console.log(data);
  return (
    <div className="App">
      <Wrapper>
        <Item key={data.id} {...data} />
      </Wrapper>
    </div>
  );
}
