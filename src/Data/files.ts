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
  {},
];
