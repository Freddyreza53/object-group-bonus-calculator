const employees = [
  {
    name: 'Atticus',
    employeeNumber: '2405',
    annualSalary: '47000',
    reviewRating: 3
  },
  {
    name: 'Jem',
    employeeNumber: '62347',
    annualSalary: '63500',
    reviewRating: 4
  },
  {
    name: 'Scout',
    employeeNumber: '6243',
    annualSalary: '74750',
    reviewRating: 5
  },
  {
    name: 'Robert',
    employeeNumber: '26835',
    annualSalary: '66000',
    reviewRating: 1
  },
  {
    name: 'Mayella',
    employeeNumber: '89068',
    annualSalary: '35000',
    reviewRating: 1
  }
];

// YOU SHOULD NOT NEED TO CHANGE ANYTHING ABOVE THIS POINT

// This problem is massive! Break the problem down, take small steps, and test as you go.
// What is the fewest lines of code I can write and test to get just a little closer?

// This is not a race. Everyone on your team should understand what is happening.
// Ask questions when you don't.

function employeeBonus(employeeArray) {
  let employeeCompensations = [];

  for (let i = 0; i < employeeArray.length; i++){
    let bonus = 0;
    
    if (employeeArray[i].employeeNumber.length === 4) {
      switch (employeeArray[i].reviewRating) {
      case 3:
        bonus = 0.09;
        break;
      case 4:
        bonus = 0.11;
        break;
      case 5:
        bonus = 0.13;
        break;
      default:
        bonus = 0;
        break;
      }
    }
    else {
      switch (employeeArray[i].reviewRating) {
          case 3:
            bonus = 0.04;
            break;
          case 4:
            bonus = 0.06;
            break;
          case 5:
            bonus = 0.10;
            break;
          default:
            bonus = 0;
            break;
        }
    }
    
    if ( employeeArray[i].annualSalary >= 65000 && bonus !== 0 ) {
      bonus -= .01;
    }
    let totalBonus = bonus * employeeArray[i].annualSalary;
    let totalCompensation = totalBonus + Number(employeeArray[i].annualSalary);

    bonus = Math.floor(bonus*100);
    
    let newEmployee = {
      newName: employeeArray[i].name,
      bonusPercentage: `${bonus}%`,
      totalCompensation: totalCompensation,
      totalBonus: totalBonus
    }
    employeeCompensations.push(newEmployee)
  }
  
  return employeeCompensations;
}


console.log(employeeBonus(employees));

console.log( employees );
