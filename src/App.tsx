import "./App.css";
import data from "./data-nested.json";

interface Item {
  fileName: string;
  children: any[];
}

const Wrapper = ({ children }: any) => {
  return <ul>{children}</ul>;
};

const Item = ({ fileName, children }: Item) => {
  return (
    <li>
      {fileName}
      {children && (
        <Wrapper>
          {children.map((el: any) => {
            return <Item {...el} />;
          })}
        </Wrapper>
      )}
    </li>
  );
};

export default function App() {
  return (
    <div className="App">
      <Wrapper>
        <Item {...data} />
      </Wrapper>
    </div>
  );
}
