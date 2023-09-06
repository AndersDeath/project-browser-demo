import "./App.css";
import data from "./data-nested.json";

interface Item {
  id: string;
  fileName: string;
  children: any[];
}

const Wrapper = ({ children }: any) => {
  return <ul>{children}</ul>;
};

const Item = ({ fileName, children }: Item) => {
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
      <span className={style}>{fileName}</span>
      {children && (
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
