import { FC, PropsWithChildren } from 'react';

import './employeesAddForm.css';


type IProps = PropsWithChildren

const EmployeesAddForm:FC<IProps> = () => {
  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        className="add-form d-flex">
        <input type="text"
          className="form-control new-post-label"
          placeholder="Как его зовут?" />
        <input type="number"
          className="form-control new-post-label"
          placeholder="З/П в $?" />

        <button type="submit"
          className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;