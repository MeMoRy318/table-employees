import { FC, PropsWithChildren } from 'react';

import { IEmployee, EEmployee } from '../../interfaces/employees-interface';
import EmployeesListItem from '../employees-list-item/EmployeesListItem';

import'./employeesList.css';


interface IProps extends PropsWithChildren{
  employees:IEmployee[];
  deleteEmployee: (id: string | number) => void;
  updateEmployee: (id: string | number, key: EEmployee, value: string | boolean) => void
}


const EmployeesList:FC<IProps> = ({ employees, deleteEmployee, updateEmployee }) => {
  return (
    <ul className="app-list list-group">
      {!!employees.length && employees.map(employee => 
        <EmployeesListItem 
          employee={employee} 
          deleteEmployee={deleteEmployee}
          updateEmployee={updateEmployee}
          key={employee.id}
        />)}
    </ul>
  );
};

export default EmployeesList;