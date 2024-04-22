import { FC, PropsWithChildren } from 'react';

import './app.css';
import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';


type IProps = PropsWithChildren

const App:FC<IProps> = () => {
  const data = [
    {id:1,name:'Vasya',increase:false,salary:800},
    {id:2,name:'Oleg',increase:true,salary:1000},
    {id:3,name:'Kokos',increase:false,salary:900}
  ]; 
  
  return (
    <div className='app'>
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList employees={data}/>
      <EmployeesAddForm/>
    </div>
  );
};

export default App;