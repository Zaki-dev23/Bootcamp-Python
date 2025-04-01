

function myPromise() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve('success')
        }, 4000)
    
})
}

myPromise().then((message) => console.log(message)); 
