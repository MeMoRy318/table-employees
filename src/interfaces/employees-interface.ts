interface IEmployeeFormData {
    name: string;
    salary: number | string;
}


interface IEmployee extends IEmployeeFormData{
    id: number
    increase: boolean,
}



export type { IEmployee,IEmployeeFormData };