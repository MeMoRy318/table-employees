import React, { FC, PropsWithChildren, useState } from 'react';

import { IEmployee,EEmployee } from '../../interfaces/employees-interface';

import './employeesListItem.css';


interface IProps extends PropsWithChildren {
  employee: IEmployee;
  deleteEmployee: (id: string | number) => void;
  updateEmployee: (id: string | number, key: EEmployee, value: string | boolean) => void
}


const EmployeesListItem: FC<IProps> = ({ employee: { increase, name, salary,id,rise }, deleteEmployee, updateEmployee }) => {
  const [value,setValue] = useState<string>(String(salary));


  const listItemClasses = `list-group-item d-flex justify-content-between${increase ? ' increase' : ''}${rise ? ' like' : ''}`;


  const handleChangeSalary = (e:React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const handleDelete = () => deleteEmployee(id);


  return (
    <li className={listItemClasses}>
      <span className="list-group-item-label" onClick={()=> updateEmployee( id, EEmployee.RISE, !rise)}>{name}</span>
      <input 
        type="text"
        name='salary'
        value={value}
        onChange={handleChangeSalary}
        className="list-group-item-input"
      />
      <div className='d-flex justify-content-center align-items-center'>
        <button 
          type="button" 
          className="btn-cookie btn-sm" 
          onClick={() => updateEmployee( id, EEmployee.INCREASE, !increase)}>
          <i className="fas fa-cookie"></i>
        </button>
        <button 
          type="button" 
          className="btn-trash btn-sm"
          onClick={handleDelete}
        >
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
