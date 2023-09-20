export interface IItem {
  id: string
  fileName: string
  children: IItem[] | null
  minimized?: boolean
}

export interface FileBody {
  id: string
  content: string
  title: string
}
export interface FileContextType {
  file: FileBody | null
  setFile: (file: FileBody | null) => void
}
