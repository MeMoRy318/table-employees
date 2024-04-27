import { FC, PropsWithChildren,Dispatch } from 'react';

import './appFilter.css';


interface IProps extends PropsWithChildren{
  filterParams: string;
  setFilterParam: Dispatch<React.SetStateAction<string>>
}

const AppFilter:FC<IProps> = ({filterParams,setFilterParam}) => {
  const buttonsData = [
    {name: 'all', label: 'Все сотрудники'},
    {name: 'rise', label: 'На повышение'},
    {name: 'moreThen1000', label: 'З/П больше 1000$'}
  ];


  const button = buttonsData.map(element => {
    const active = filterParams === element.name ? 'btn-light' : 'btn-outline-light';
    return(
      <button
        key={element.name} 
        type="button"
        className={`btn ${active}`}
        onClick={()=>setFilterParam(element.name)}
      >
        {element.label}
      </button>
    );
  });


  return (
    <div className="btn-group">
      {button}
    </div>
  );
};

export default AppFilter;