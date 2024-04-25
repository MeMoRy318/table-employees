import { FC, PropsWithChildren, useState } from 'react';

import { IEmployee, IEmployeeFormData } from '../../interfaces/employees-interface';
import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';

import './app.css';


type IProps = PropsWithChildren


const App:FC<IProps> = () => {
  const data = [
    {id:1,name:'Vasya',increase:false,salary:800},
    {id:2,name:'Oleg',increase:true,salary:1000},
    {id:3,name:'Kokos',increase:false,salary:900}
  ]; 


  const [employees,setEmployees] = useState<IEmployee[]>(data);
  

  const addEmployee = (employee: IEmployeeFormData) => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 0;
    setEmployees(prev => [...prev, { ...employee, id, increase: false }]);
  };
  

  const deleteEmployee = (id: string | number) =>{
    setEmployees(prev => prev.filter(value => value.id !== id));
  };


  return (
    <div className='app'>
      <AppInfo/>
      <div className="search-panel">
        <SearchPanel/>
        <AppFilter/>
      </div>
      <EmployeesList employees={employees} deleteEmployee={deleteEmployee}/>
      <EmployeesAddForm addEmployee={addEmployee}/>
    </div>
  );
};

export default App;