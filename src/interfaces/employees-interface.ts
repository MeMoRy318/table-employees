interface IEmployeeFormData {
    name: string;
    salary: number | string;
}


interface IEmployee extends IEmployeeFormData{
    id: number
    increase: boolean,
    rise: boolean
}

export enum EEmployee {
    RISE = 'rise',
    INCREASE = 'increase'
}


export type { IEmployee, IEmployeeFormData };