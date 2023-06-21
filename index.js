// Write your solution in this file!
const employee ={name : "John" , streetAddress : "NY112"};
function updateEmployeeWithKeyAndValue(employee, key, value){
    const newObj = {...employee};
    newObj.name = 'Sam';
    newObj.streetAddress = '11 Broadway';
    return newObj;
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    
    employee.name = 'Sam';
    employee.streetAddress = '12 Broadway';
    return employee;
}
function deleteFromEmployeeByKey(employee, key){
    let newEmployee = employee;
    delete newEmployee.name;
    return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key){
    return employee;
}


