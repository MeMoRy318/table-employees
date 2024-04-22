import { FC, PropsWithChildren } from 'react';

import './appInfo.css';


type IProps = PropsWithChildren;

const AppInfo:FC<IProps> = () => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников:</h2>
      <h2>Премию получат:</h2>
    </div>
  );
};

export default AppInfo;