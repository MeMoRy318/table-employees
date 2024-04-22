import { FC, PropsWithChildren } from 'react';

import './app.css';
import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';


type IProps = PropsWithChildren

const App:FC<IProps> = () => {
  return (
    <div className='app'>
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList/>
      <EmployeesAddForm/>
      
    </div>
  );
};

export default App;