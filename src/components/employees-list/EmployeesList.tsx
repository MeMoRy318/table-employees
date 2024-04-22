import { FC, PropsWithChildren } from 'react';

import'./employeesList.css';
import { IEmployee } from '../../interfaces/employees-interface';
import EmployeesListItem from '../employees-list-item/EmployeesListItem';


interface IProps extends PropsWithChildren{
  employees:IEmployee[]
}

const EmployeesList:FC<IProps> = ({employees}) => {
  return (
    <ul className="app-list list-group">
      {employees.length && employees.map(employee => <EmployeesListItem employee={employee} key={employee.id}/> )}
    </ul>
  );
};

export default EmployeesList;