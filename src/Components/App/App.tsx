import { useState } from "react";
import "./App.scss";

import TreeView from '../TreeView/TreeView';
import DetailsView from '../DetailsView/DetailsView';

export default function App() {
  return (
    <div className="App">
      <TreeView />
      <DetailsView />
    </div>
  );
}
