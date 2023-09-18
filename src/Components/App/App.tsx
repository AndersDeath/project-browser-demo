import { useState } from "react";
import "./App.scss";

import TreeView from "../TreeView/TreeView";
import DetailsView from "../DetailsView/DetailsView";
import Header from "../Header/Header";
import { FileContextType, FileProvider } from "../../FileContext";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <FileProvider>
          <TreeView />
          <DetailsView />
        </FileProvider>
      </div>
    </div>
  );
}
