import { FC, PropsWithChildren, useState } from 'react';

import { IEmployeeFormData } from '../../interfaces/employees-interface';

import './employeesAddForm.css';


interface IProps extends PropsWithChildren{
  addEmployee: (employee: IEmployeeFormData) => void
}


const EmployeesAddForm:FC<IProps> = ({addEmployee}) => {
  const [value,setValue] = useState<IEmployeeFormData>({name:'',salary:''});


  const handleChangeValue = (e:React.ChangeEvent<HTMLInputElement>,name:string) => {
    setValue(prev => ({...prev,[name]:e.target.value}));
  };


  const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addEmployee(value);
    setValue({name:'',salary:''});
  };


  return (
    <div className="app-add-form">
      <h3>Добавьте нового сотрудника</h3>
      <form
        onSubmit={handleSubmit}
        className="add-form d-flex">
        <input type="text"
          name='name'
          value={value.name}
          onChange={(e)=> handleChangeValue(e,'name')}
          className="form-control new-post-label"
          placeholder="Как его зовут?" />
        <input type="number"
          name='salary'
          value={value.salary}
          onChange={(e)=> handleChangeValue(e,'salary')}
          className="form-control new-post-label"
          placeholder="З/П в $?" />
        <button type="submit"
          className="btn btn-outline-light">Добавить</button>
      </form>
    </div>
  );
};

export default EmployeesAddForm;