
export interface ITodo{
    id?:number;
    title:string;
    createDate:string;
    deadline:string;
    responsiblePersonName:string;
    status:TodoStatus;    
}

export enum TodoStatus{
    pending=1,
    complted=2
}


export interface IResponsiblePerson{
    id:number;
    name:string
}