export default interface role{
    roleName: string;
    location: string;
    department: string;
    employeeNames: string[];
}
export default class addRole implements role {
    constructor(
      public roleName: string,
      public location: string,
      public department: string,
      public employeeNames: string[]
    ) {}
}