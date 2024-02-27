export interface Employee {
    employeeName: string;
    employeeEmail: string;
    location: string;
    department: string;
    role: string;
    empNo: string;
    status: string;
    joiningDate: string;
}
export default class Emp implements Employee {
    constructor(
      public employeeName: string,
      public employeeEmail: string,
      public location: string,
      public department: string,
      public role: string,
      public empNo: string,
      public status: string,
      public joiningDate: string
    ) {}
}