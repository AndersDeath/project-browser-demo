import { useEffect } from 'react';
import './TreeView.scss';
import { FilesData, files } from '../../Data/files';
import { useFileContext } from '../../FileContext';
import { Item } from '../Item/Item';

const Files = new FilesData(files);

export default function TreeView() {
  const { setFile } = useFileContext();

  useEffect(() => {
    setFile(Files.get('13'));
  }, [setFile]);

  return (
    <div className='TreeView'>
      <ul>
        <Item key={Files.structure.id} {...Files.structure} />
      </ul>
    </div>
  );
}
