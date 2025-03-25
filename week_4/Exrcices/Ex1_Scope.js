//🌟 Exercise 1 : Scope

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`);
}


// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? 
//////typeError : Assignement to constant
/////----Output : a = 3

//#2
let b = 0;
function funcTwo() {
    b = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${b}`);
}
///----Output : 

// #2.1 - run in the console:
funcThree()  //0
funcTwo()  //5
funcThree()  //5
// #2.2 What will happen if the variable is declared 
// with const instead of let ?
//VM229:3 Uncaught TypeError: Assignment to constant variable.


//#3
function funcFour() {
    window.a = "hello";
}


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}
// a stocked in window so know a is golbal variable and function returned 'inside the funcFive function hello'

// #3.1 - run in the console:
funcFour()
funcFive()

//#4
let c = 1;
function funcSix() {
    let c = "test";
    alert(`inside the funcSix function ${c}`);
}


// #4.1 - run in the console:
funcSix()
// #4.2 What will happen if the variable is declared 
//----------inside the funcSix function test
// with const instead of let ?
//----------inside the funcSix function test

//#5
let d = 2;
if (true) {
    let d = 5;
    alert(`in the if block ${d}`);
}
alert(`outside of the if block ${d}`);

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ?

// the first aleart is show `in the if block 5` if declare with let
// the first aleart is show `outside of the if block 2` if declare with let

// the first aleart is show `in the if block 2` if declare with const
// the first aleart is show `outside of the if block 2` if declare with const