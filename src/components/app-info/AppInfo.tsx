import { FC, PropsWithChildren } from 'react';

import './appInfo.css';


interface IProps extends PropsWithChildren {
  totalRise:number
  totalEmployees:number
}

const AppInfo:FC<IProps> = ({totalEmployees,totalRise}) => {
  return (
    <div className="app-info">
      <h1>Учет сотрудников в компании N</h1>
      <h2>Общее число сотрудников: {totalEmployees}</h2>
      <h2>Премию получат: {totalRise}</h2>
    </div>
  );
};

export default AppInfo;