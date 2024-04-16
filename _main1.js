// Exercise I
function Employee(name, companyName, jobPosition, salary) {
    this.name = name;
    this.companyName = companyName;
    this.jobPosition = jobPosition;
    this.salary = salary;
}

const employee1 = new Employee(
    "Tomevski. T",
    "Instagram",
    "Graphic Design",
    "50.000$"
);
const employee2 = new Employee(
    "Trifun. T",
    "Facebook",
    "React Developer",
    "75.000$"
);
const employee3 = new Employee(
    "Trifun Tomevski",
    "Google",
    "Software Engineer",
    "100.000$"
);

const employeeList = document.getElementById("employee-list");

const employee1Details = document.createElement("li");
employee1Details.innerHTML =
    "Name: " +
    employee1.name +
    ", Company: " +
    employee1.companyName +
    ", Position: " +
    employee1.jobPosition +
    ", Salary: " +
    employee1.salary;
employeeList.appendChild(employee1Details);

const employee2Details = document.createElement("li");
employee2Details.innerHTML =
    "Name: " +
    employee2.name +
    ", Company: " +
    employee2.companyName +
    ", Position: " +
    employee2.jobPosition +
    ", Salary: " +
    employee2.salary;
employeeList.appendChild(employee2Details);

const employee3Details = document.createElement("li");
employee3Details.innerHTML =
    "Name: " +
    employee3.name +
    ", Company: " +
    employee3.companyName +
    ", Position: " +
    employee3.jobPosition +
    ", Salary: " +
    employee3.salary;
employeeList.appendChild(employee3Details);
