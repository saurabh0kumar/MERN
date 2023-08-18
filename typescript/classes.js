var employee = /** @class */ (function () {
    function employee(id, name, salary) {
        this.id = id;
        this.name = name;
        this.salary = salary;
    }
    employee.prototype.displayEmployee = function () {
        console.log(this.id);
        console.log(this.name);
        console.log(this.salary);
    };
    employee.prototype.calculateperday = function () {
        return this.salary / 30;
    };
    return employee;
}());
var emp = new employee(1, "sachin", 70000);
emp.displayEmployee();
console.log(emp.calculateperday());
