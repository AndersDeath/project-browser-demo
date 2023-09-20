import { ReactNode, createContext, useContext, useState } from 'react';
import { FileBody, FileContextType } from './Data/interfaces';

interface FileProviderProps {
  children: React.ReactNode;
}

export const FileContext = createContext<FileContextType | undefined>(undefined);

interface FileProviderProps {
  children: ReactNode;
}

export const useFileContext = () => {
  const context = useContext(FileContext);
  if (!context) {
    throw new Error('userFileContext must be used within a UserProvider');
  }
  return context;
};

export const FileProvider: React.FC<FileProviderProps> = ({ children }: FileProviderProps) => {
  const [file, setFile] = useState<FileBody | null>(null);

  return <FileContext.Provider value={{ file, setFile }}>{children}</FileContext.Provider>;
};
