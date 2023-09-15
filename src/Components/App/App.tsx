import { useState } from "react";
import "./App.scss";

import TreeView from "../TreeView/TreeView";
import DetailsView from "../DetailsView/DetailsView";
import Header from "../Header/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <div className="Content">
        <TreeView />
        <DetailsView />
      </div>
    </div>
  );
}
