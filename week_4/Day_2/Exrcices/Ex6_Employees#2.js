// 🌟 Exercise 6 : Employees #2

const students = [{ name: "Ray", course: "Computer Science", isPassed: true },
{ name: "Liam", course: "Computer Science", isPassed: false },
{ name: "Jenner", course: "Information Technology", isPassed: true },
{ name: "Marco", course: "Robotics", isPassed: true },
{ name: "Kimberly", course: "Artificial Intelligence", isPassed: false },
{ name: "Jamie", course: "Big Data", isPassed: false }];

//1
let isPassed = students.filter(passed => passed.isPassed)
console.log(isPassed);

//2

students
    .filter(passed => passed.isPassed)
    .forEach(student => console.log(`Good job ${student.name}, you passed the course in ${student.course}`))

