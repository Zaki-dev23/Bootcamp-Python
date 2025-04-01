let str1 = "School master"
let str2 = "The classroom"

let process1 = str1.trim().split('').sort()
let process2 = str2.trim().split('').sort()

if (process1.length == process2.length) {
    console.log(`"${str1}" is an anagram of "${str2}"`);
    return false
}else{
    console.log("Not angram");
}