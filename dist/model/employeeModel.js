"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Emp = /** @class */ (function () {
    function Emp(employeeName, employeeEmail, location, department, role, empNo, status, joiningDate) {
        this.employeeName = employeeName;
        this.employeeEmail = employeeEmail;
        this.location = location;
        this.department = department;
        this.role = role;
        this.empNo = empNo;
        this.status = status;
        this.joiningDate = joiningDate;
    }
    return Emp;
}());
exports.default = Emp;
