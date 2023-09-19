export class FilesData {
  private files: any[] = [];
  constructor(files: any[]) {
    this.files = files;
  }

  get(id: string) {
    return (
      this.files.filter((e) => {
        return e.id === id;
      })[0] || false
    );
  }
}

export const files = [
  {
    title: "index.tsx",
    id: "9",
    content: `import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './Components/App/App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
    `,
  },
  {
    title: "README.MD",
    id: "12",
    content: `# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### \`npm start\`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### \`npm test\`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### \`npm run build\`

Builds the app for production to the \`build\` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### \`npm run eject\`

**Note: this is a one-way operation. Once you \`eject\`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can \`eject\` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except \`eject\` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don\'t have to ever use \`eject\`. The curated feature set is suitable for small and middle deployments, and you shouldn\'t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
`,
  },
  {
    title: "package.json",
    id: "11",
    content: `{
  "name": "tree-folder",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "@testing-library/jest-dom": "^5.17.0",
    "@testing-library/react": "^13.4.0",
    "@testing-library/user-event": "^13.5.0",
    "@types/jest": "^27.5.2",
    "@types/node": "^16.18.48",
    "@types/react": "^18.2.21",
    "@types/react-dom": "^18.2.7",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-scripts": "5.0.1",
    "react-syntax-highlighter": "^15.5.0",
    "typescript": "^4.9.5",
    "web-vitals": "^2.1.4"
  },
  "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "eject": "react-scripts eject"
  },
  "eslintConfig": {
    "extends": [
      "react-app",
      "react-app/jest"
    ]
  },
  "browserslist": {
    "production": [
      ">0.2%",
      "not dead",
      "not op_mini all"
    ],
    "development": [
      "last 1 chrome version",
      "last 1 firefox version",
      "last 1 safari version"
    ]
  },
  "devDependencies": {
    "@types/react-syntax-highlighter": "^15.5.7",
    "sass": "^1.67.0"
  }
}
`,
  },
  {
    title: "test.js",
    id: "10",
    content: `import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
`,
  },
  {
    title: "App.tsx",
    id: "3",
    content: `import "./App.scss";

import TreeView from "../TreeView/TreeView";
import DetailsView from "../DetailsView/DetailsView";
import Header from "../Header/Header";
import { FileProvider } from "../../FileContext";

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
`,
  },
  {
    title: "App.scss",
    id: "5",
    content: `.App {
  width: 100%;
  height: 100%;
}
.Content {
  display: flex;
  flex-direction: row;
  height: calc(100% - 51px);
}
`,
  },
  {
    title: "Main.page.scss",
    id: "8",
    content: `// here should be styles for Main Page`,
  },
  {
    title: "Main.page.tsx",
    id: "7",
    content: `"use client";
export default function Main() {
  return (
    <>
      <h1>Main page</h1>
    </>
  );
}
`,
  },
];
