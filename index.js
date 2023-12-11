const readline = require('readline-sync');

const employees = []

function addEmployee(){
  const name = readline.question("Enter Employee's name: ");
  const position = readline.question("Enter Employee's position: ");
  const salary = parseFloat(readline.question("Enter Employee's salary: "))

  const employee = {name,position,salary};
  employees.push(employee);

  console.log("Employee Added Successfully!\n");
}

function displayEmployees(){
  console.log("Employee's List: ");

  employees.forEach((employee, index) => {
    console.log(`${index+1} - ${employee.name}, ${employee.position}, Salary: ${employee.salary}`)
  })
  console.log("\n")
}

function mainMenu(){
  console.log("Employee Management System")
  console.log("1. Add Employee")
  console.log("2. Display Employees")
  console.log("3. Exit\n")

  const choice = readline.question("Enter your choice: ")

  switch(choice){
    case '1':
      addEmployee();
      break;
    case '2':
      displayEmployees();
      break;
    case '3':
      console.log("Exiting...")
      process.exit(0);
    default:
      console.log('Invalid choice. Please try again.\n');
  }
  mainMenu();
}

mainMenu();