import { FC, PropsWithChildren } from 'react';

import { IEmployee } from '../../interfaces/employees-interface';
import EmployeesListItem from '../employees-list-item/EmployeesListItem';

import'./employeesList.css';


interface IProps extends PropsWithChildren{
  employees:IEmployee[];
  deleteEmployee: (id: string | number) => void;
}


const EmployeesList:FC<IProps> = ({employees,deleteEmployee}) => {
  return (
    <ul className="app-list list-group">
      {!!employees.length && employees.map(employee => 
        <EmployeesListItem 
          employee={employee} 
          deleteEmployee={deleteEmployee} 
          key={employee.id}/> )}
    </ul>
  );
};

export default EmployeesList;