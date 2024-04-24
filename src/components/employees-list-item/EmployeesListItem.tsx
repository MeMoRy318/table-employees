import React, { FC, PropsWithChildren, useState } from 'react';

import './employeesListItem.css';
import { IEmployee } from '../../interfaces/employees-interface';


interface IProps extends PropsWithChildren {
  employee: IEmployee;
}

const EmployeesListItem: FC<IProps> = ({ employee: { increase, name, salary } }) => {
  const [currentIncrease, setIncrease] = useState<boolean>(increase);
  const [like, setLike] = useState<boolean>(false);

  const listItemClasses = `list-group-item d-flex justify-content-between${currentIncrease ? ' increase' : ''}${like ? ' like' : ''}`;

  const onIncrease = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>): void => {
    e.stopPropagation();
    setIncrease(prev => !prev);
  };

  const onLike = () => setLike(prev => !prev);

  return (
    <li className={listItemClasses} onClick={onLike}>
      <span className="list-group-item-label">{name}</span>
      <input type="text" className="list-group-item-input" defaultValue={`${salary}$`} />
      <div className='d-flex justify-content-center align-items-center'>
        <button type="button" className="btn-cookie btn-sm" onClick={onIncrease}>
          <i className="fas fa-cookie"></i>
        </button>
        <button type="button" className="btn-trash btn-sm">
          <i className="fas fa-trash"></i>
        </button>
        <i className="fas fa-star"></i>
      </div>
    </li>
  );
};

export default EmployeesListItem;
