// Exercise 4: quizz - not mandatory

//08. it's time to practice with promises
function job() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('hello world')
        }, 2000);
    })
}

// job().then(console.log)

//09. More practice promises


function job(data) {
    return new Promise((resolve, reject) => {
        if (isNaN(data)) {
            reject(`error : the "${data}" is not a number`)
        } else if (data % 2 == 1) {
            setTimeout(() => {
                resolve(`${data} is an odd number`)
            }, 1000);
        } else if (data % 2 == 0) {
            setTimeout(() => {
                resolve(`${data} is an even number`)
            }, 2000);
        }
    })
}

// job(10).then(console.log).catch(console.log)

//10. Chaining the promises

var promise = job1();

promise
    .then(function (data1) {
        console.log('data1', data1);
        return job2();
    })
    .then(function (data2) {
        console.log('data2', data2);
        return 'Hello world';
    })
    .then(function (data3) {
        console.log('data3', data3);
    });

function job1() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            resolve('result of job 2');
        }, 1000);
    });
}

//13 it's quiz time