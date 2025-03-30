// 🌟 Exercise 2: Display Student Info



function displayStudentInfo(objUser){
    //destructuring
    return console.log(    `Your full name is ${objUser.first} ${objUser.last}`   );
}

displayStudentInfo({first: 'Elie', last:'Schoppik'});