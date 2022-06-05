// Write your solution in this file!
const employee = {
    name:"Jack",
    streetAddress:"Waiyaki Way"
};                                                               

//modifying non-destructively
function updateEmployeeWithKeyAndValue(employees,key,value){
const employeeName = {...employee};
employeeName[key]=value;
return employeeName;
};


// const employeeUpdate1 = destructivelyDeleteFromEmployeeByKey(employees,"name","Josh");

// destructively modify
function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
    employee[key]=value;
    return employee;
    };
    
    // const employeeUpdate2 = destructivelyUpdateEmployeeWithKeyAndValue(employees,"name","Steve");
    
    // delete non-destructively
    function deleteFromEmployeeByKey(employee, key){
    const delEmplee = {...employee};
    delete delEmplee[key];
    return delEmplee;
    
    };
    
    // const delEmplee = deleteFromEmployeeByKey(del.streetAddress);
    
    // destructively delete
    function destructivelyDeleteFromEmployeeByKey(employee,key){
    delete employee[key];
    return employee;
    };
    
    // const delEmplee2 = destructivelyDeleteFromEmployeeByKey(employees.streetAddress);
    