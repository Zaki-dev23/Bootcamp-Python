//🌟 Exercise 4 : Building Management

//1
const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
//2
console.log(`Number of floors: ${building.numberOfFloors}`);
//3
console.log("the numbre of apartemnts are on the floore 1 and 3 is :",building.numberOfAptByFloor.firstFloor + building.numberOfAptByFloor.thirdFloor);
//4
console.log(`the name of the second tenant is ${building.nameOfTenants[1]} and the number of rooms he has in his apartment ${building.numberOfRoomsAndRent['dan'][0]}.`);
//5
const rentSarah = building.numberOfRoomsAndRent.sarah[0]
const rentDevid = building.numberOfRoomsAndRent.david[0]
const rentDan = building.numberOfRoomsAndRent.dan[0]
some_sarah_david = rentSarah + rentDevid

if (some_sarah_david > rentDan) {
    danRent = 1200;
  console.log(`Dan's rent has been increased to ${danRent}.`);
} else {
    console.log("Dan's rent remains the same.");
}