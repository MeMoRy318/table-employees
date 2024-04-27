import { FC, PropsWithChildren, useState } from 'react';

import { EEmployee, IEmployee, IEmployeeFormData } from '../../interfaces/employees-interface';
import AppFilter from '../app-filter/AppFilter';
import AppInfo from '../app-info/AppInfo';
import EmployeesAddForm from '../employees-add-form/EmployeesAddForm';
import EmployeesList from '../employees-list/EmployeesList';
import SearchPanel from '../search-panel/SearchPanel';

import './app.css';


type IProps = PropsWithChildren


const App:FC<IProps> = () => {
  const initialEmployees = [
    {id:1,name:'Vasya',increase:false,salary:800,rise: false},
    {id:2,name:'Oleg',increase:false,salary:1000,rise: true},
    {id:3,name:'Kokos',increase:false,salary:900,rise: false}
  ]; 


  const [employees,setEmployees] = useState<IEmployee[]>(initialEmployees);
  const [filterParams,setFilterParams] = useState('all');
  const [params,setParams] = useState<string>('');


  const totalEmployees = employees.length;
  const totalRise = employees.filter(value => value.increase ).length;

  const addEmployee = (employee: IEmployeeFormData) => {
    const id = employees.length ? employees[employees.length - 1].id + 1 : 0;
    setEmployees(prev => [...prev, { ...employee, id, increase: false, rise:false }]);
  };
  

  const deleteEmployee = (id: string | number) =>{
    setEmployees(prev => prev.filter(value => value.id !== id));
  };

  
  const updateEmployee = (id: string | number, key: EEmployee, value: string | boolean) => {
    setEmployees(prev => prev.map(employee => {
      if (employee.id === id) {
        return { ...employee, [key]: value };
      }
      return employee;
    }));
  };


  const serchEmployees = ( employees:IEmployee[], params:string ):IEmployee[] =>{
    if(!employees.length || params.length < 1  ) return employees;
    return employees.filter(value => value.name.indexOf(params) > -1);
  };


  const filterEmployees = ( employees:IEmployee[], params:string ):IEmployee[] =>{
    switch(params){
    case 'rise':
      return employees.filter(value => value.rise);
    case 'moreThen1000':
      return employees.filter(value => +value.salary > 1000);
    default:
      return employees;
    }
  };

  
  const filterArrEmployees = filterEmployees(serchEmployees(employees , params),filterParams);
  

  return (
    <div className='app'>
      <AppInfo totalEmployees={totalEmployees} totalRise={totalRise}/>
      <div className="search-panel">
        <SearchPanel params={params} setParams={setParams}/>
        <AppFilter filterParams={filterParams} setFilterParam={setFilterParams}/>
      </div>
      <EmployeesList employees={filterArrEmployees} deleteEmployee={deleteEmployee} updateEmployee={updateEmployee}/>
      <EmployeesAddForm addEmployee={addEmployee}/>
    </div>
  );
};

export default App;