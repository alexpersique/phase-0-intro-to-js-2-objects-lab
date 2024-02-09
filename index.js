// Write your solution in this file!

const employee = {
name: "Milo", 
streetAddress: "743 Evergreen Blvd"};

const updateEmployeeWithKeyAndValue = (employee, key, value) => {
    const employeeUpdated = {...employee};
    employeeUpdated[key] = value;
    return employeeUpdated;


}

const destructivelyUpdateEmployeeWithKeyAndValue = (employee, key, value) => {
    employee[key] = value;
    return employee;

}

const deleteFromEmployeeByKey = (employee, key) => {
    const newEmployee = {...employee}; 
    delete newEmployee.name;
    return newEmployee;
    
}

const destructivelyDeleteFromEmployeeByKey = (employee, key) => {
    delete employee.name;
    return employee;
}

console.log (destructivelyDeleteFromEmployeeByKey(employee));
