import { FC, PropsWithChildren } from 'react';

import'./employeesList.css';
import EmployeesListItem from '../employees-list-item/EmployeesListItem';


type IProps = PropsWithChildren

const EmployeesList:FC<IProps> = () => {
  return (
    <ul className="app-list list-group">
      <EmployeesListItem/>
      <EmployeesListItem/>
      <EmployeesListItem/>
    </ul>
  );
};

export default EmployeesList;