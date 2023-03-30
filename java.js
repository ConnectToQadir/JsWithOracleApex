// Array

// var data = [4,6,8]
// console.log(data[data.length-1])


// Object
// Array can't be used for the following Data
// var studentData = ["Ali","Ahmad","ICS","73272738"]

var age = 45
var data = {name:"Ali",fName:"Ahmad",edu:["ICS","FA","Fsc"],cell:"73272738",age}
// data.age = age

// JSON
// Java Script Object Notation
// var data = {"name":"Ali","fName":"Ahmad","edu":"ICS","cell":73272738}

// console.log(data.edu[1])


var students = [
    {name:"Ali",age:54,fee:2},
    {name:"Raza",age:44,fee:4},
    {name:"Ahmad",age:55,fee:3},
    {name:"asadf",age:55,fee:10}
]




// To sum any fild in array of objects in lengthy way
// var sum = 0
// for( var i = 0 ; i < students.length ; i++){
//     sum = sum + students[i].fee
// }
// console.log(sum)

// console.log(students[0].fee + students[1].fee + students[2].fee)



// To sum any fild in array of objects in shortest way
// var sum = 0;
// students.map(v=>sum = sum + v.fee)
// console.log(sum)