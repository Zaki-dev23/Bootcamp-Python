//🌟 Exercise 5 : Star Wars

const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];

console.log(epic.reduce((acc , string )=> {
    return acc +' '+ string
}));
