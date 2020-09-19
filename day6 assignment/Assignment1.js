let employees = [
  {
    name: "Kumar",
    age: 24,
    city: "Nagpur",
    salary: 50000,
  },
  {
    name: "Rohit",
    age: 30,
    city: "Pune",
    salary: 70000,
  },
  {
    name: "Sai",
    age: 20,
    city: "Nashik",
    salary: 29000,
  },
  {
    name: "Siya",
    age: 20,
    city: "Mumbai",
    salary: 30000,
  },
  {
    name: "Rashami",
    age: 23,
    city: "Mumbai",
    salary: 60000,
  },
];


function display(employeeArray) {
  let tableData = "";

  employeeArray.forEach(function (employee, index) {
    let currentRow = `<tr>
    <td>${index + 1}</td>
    <td>${employee.name}</td>
    <td>${employee.age}</td>
    <td>${employee.city}</td>
    <td>${employee.salary}</td>
    <td>
    <button onclick="deleteEmployee(${index})">Delete</button>
    </td>
    </tr>`;

    tableData += currentRow;
  });
  document.getElementsByClassName("table-body")[0].innerHTML = tableData;
}

display(employees);


function searchByName() {
  let searchValue = document.getElementsByClassName("ser")[0].value;

  let newData = employees.filter(function (employee) {
    return employee.name.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  display(newData);
}


function searchByCity() {
  let searchValue = document.getElementsByClassName("ser")[1].value;

  let newData = employees.filter(function (employee) {
    return employee.city.toUpperCase().indexOf(searchValue.toUpperCase()) != -1;
  });

  display(newData);
}


function deleteEmployee(index) {
  employees.splice(index, 1);
  display(employees);
}