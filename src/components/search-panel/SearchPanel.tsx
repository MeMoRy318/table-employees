import {FC,PropsWithChildren} from 'react';

import './searchPanel.css';


interface IProps extends PropsWithChildren {
  params:string
  setParams:React.Dispatch<React.SetStateAction<string>>
}


const SearchPanel:FC<IProps> = ({params,setParams}) => {


  const onSearch = (e:React.ChangeEvent<HTMLInputElement>) =>{
    setParams(e.target.value);
  };


  return (
    <input type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"
      value={params}
      onChange={onSearch}
    />
  );
};

export default SearchPanel;