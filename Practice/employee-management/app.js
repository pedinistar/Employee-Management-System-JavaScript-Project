const readline = require('readline-sync')
const employees = [];

function randomNum(){
  return Math.floor(Math.random()*3+1)
}


function addEmployee(){
  if (employees.length+1<=10){
    const name = readline.question("Enter Employee's Name: \n")
    const age = readline.questionInt("Enter Employee's Age: ")
    const id = name.slice(name.length-randomNum()).toUpperCase()+age+randomNum()
    console.log(`Employee's Id: ${id}`);

    const employee = {name,age,id}
    employees.push(employee)
    console.log("Employee Added SuccessFully!🎊");
  }
}

addEmployee()
displayEmployees()

function displayEmployees(){
  if (employees.length===0){
    console.log("There is no employee data entered yet.");
  } else {
    employees.forEach(function(employee,index){
      console.log("Employee's List\n");
      console.log(`Id: ${employee.id} | Name: ${employee.name} | Age: ${employee.age}`);
    })
  } 
}

function deleteEmployee(){
  const indexNum = readline.questionInt("Enter the Employee Number you want to delete: ")
  employees.splice(indexNum-1,1)
  displayEmployees()
}


function mainMenu(){
  console.log("Employee Management");
  console.log("1. Add Employee");
  console.log("1. Display Employee");
  console.log("1. Add Employee");
}




