import { ReactNode, createContext, useContext, useState } from "react";

export interface FileBody {
  id: string;
  content: string;
  title: string;
}
export interface FileContextType {
  file: FileBody | null;
  setFile: (file: FileBody | null) => void;
}

export const FileContext = createContext<FileContextType | undefined>(
  undefined
);

interface FileProviderProps {
  children: ReactNode;
}

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error("userFileContext must be used within a UserProvider");
  }
  return context;
};

export const FileProvider: React.FC<FileProviderProps> = ({ children }) => {
  const [file, setFile] = useState<FileBody | null>(null);

  return (
    <FileContext.Provider value={{ file, setFile }}>
      {children}
    </FileContext.Provider>
  );
};
