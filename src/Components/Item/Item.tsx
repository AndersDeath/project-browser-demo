import { useState } from 'react';
import { useFileContext } from '../../FileContext';
import { extToString } from '../../Utils/ext';
import { IItem } from '../../Data/interfaces';
import { FilesData, files } from '../../Data/files';

const Files = new FilesData(files);

export const Item = ({ id, fileName, minimized, children }: IItem) => {
  const [visible, setVisible] = useState(!minimized);
  const { setFile } = useFileContext();
  const style = `item ${extToString(fileName)}`;

  return (
    <li>
      {style.indexOf('folder') !== -1 ? (
        visible ? (
          <span className='folder-arrow down'>{'>'}</span>
        ) : (
          <span className='folder-arrow'>{'>'}</span>
        )
      ) : (
        ''
      )}
      <span
        className={style}
        onClick={() => {
          const file = Files.get(id);
          if (file) {
            setFile(file);
          }
          if (children) {
            setVisible(!visible);
          }
        }}
      >
        {fileName}
      </span>
      {children && visible && (
        <ul>
          {children.map((el: IItem) => {
            return <Item key={el.id} {...el} />;
          })}
        </ul>
      )}
    </li>
  );
};
