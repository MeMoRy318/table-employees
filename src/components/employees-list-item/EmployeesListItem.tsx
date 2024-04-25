import React, { FC, PropsWithChildren, useState } from 'react';

import { IEmployee } from '../../interfaces/employees-interface';

import './employeesListItem.css';


interface IProps extends PropsWithChildren {
  employee: IEmployee;
  deleteEmployee: (id: string | number) => void;
}


const EmployeesListItem: FC<IProps> = ({ employee: { increase, name, salary,id },deleteEmployee }) => {
  const [currentIncrease, setIncrease] = useState<boolean>(increase);
  const [like, setLike] = useState<boolean>(false);
  const [value,setValue] = useState<string>(String(salary));


  const listItemClasses = `list-group-item d-flex justify-content-between${currentIncrease ? ' increase' : ''}${like ? ' like' : ''}`;


  const handleIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => setIncrease(prev => !prev);
  const handleChangeSalary = (e:React.FormEvent<HTMLInputElement>) => setValue(e.currentTarget.value);
  const handleDelete = () => deleteEmployee(id);
  const handleOnLike = () => setLike(prev => !prev);


  return (
    <li className={listItemClasses}>
      <span className="list-group-item-label" onClick={handleOnLike}>{name}</span>
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
          onClick={handleIncrease}>
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
