import {FC,PropsWithChildren} from 'react';

import './searchPanel.css';


type IProps = PropsWithChildren


const SearchPanel:FC<IProps> = () => {
  return (
    <input type="text"
      className="form-control search-input"
      placeholder="Найти сотрудника"/>
  );
};

export default SearchPanel;