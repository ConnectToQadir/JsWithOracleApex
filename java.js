// Objects


// var {name,age} = {name:"Ali Raza",age:54}  // Object Destructuring
// console.log(age)

// var  [a,b,c] = ["ali","ahmad","raza"]
// console.log(c)


// Boolean
// var bool = false
// console.log(   typeof(bool)   )


// undefined
// var a
// console.log(typeof(a))


// Spread Operator
// var data = {name:"Ali Raza",age:54}
// var allData = { class:"BS", fName:"Ahmad", ...data }
// console.log(allData)



// Operators
// 1. Assignment Operator       =
// 2. Arithematic Operators     + , - , / , * , % , ++ , -- , += , -= , /= , *= 
// 3. Comparision Operators     < , <= , > , >= , != , == , ===
// 4. Logical Operators         && , || , !


// var i = 1
// console.log( 2 == ++i  )
// console.log(i)


// Fuctions


// conventional Way -----------------------------


// Defination
function sum(a,b) {
    return a+b
}

// calling
// console.log(sum(5,6))






// latest Version ------------------------------
// arrow function

// var sub = a => "Summations"
// console.log(sub())

// CallBack Fuctions
// window.onload(function(){
//     return 
// })
// window.onload(()=>"hi")



// Control Structures  => used to control to the flow of execution of a program
// 1. Sequential
// 2. Conditional  => if, ifelse , ifelseif , switch, conditional operator

// if(2>1){
//     console.log("2 is greater")
// }
// else{
//     console.log("2 is smaller")
// }


// Grading System
// var per = Number(prompt("Enter Your Percentage"))

// if(per > 100 || per < 0){
//     console.log("Enter a valid Percentage! between 0 and 100")
// }else if(per >=  90 ){
//     console.log("A+")
// }else if(per >=  80 ){
//     console.log("A")
// }else if(per >=  70 ){
//     console.log("B+")
// }else if(per >=  60 ){
//     console.log("B")
// }else if(per >=  50 ){
//     console.log("C")
// }else if(per >=  40 ){
//     console.log("D")
// }else if(per >=  33 ){
//     console.log("E")
// }else if(per <  33 ){
//     console.log("Unfornutaly! You are Fail")
// }else{
//     console.log("Enter a valid Percentage! between 0 and 100")
// }

// var num = 1
// switch(num){
//     case 1:
//     case 2:
//         console.log("Platinum")
//         break
//     case 3:
//     case 4:
//         console.log("Gold")
//         break
//     case 5:
//     case 6:
//         console.log("Master")
//         break
//     case 7:
//     case 8:
//         console.log("Silver")
//         break
//     default:
//         console.log("Mitti")
// }


2>1 ? console.log("2 is greater") : console.log("2 is smallar")










// 3. Itrration    => for loop , while loop , do while loop ,     map loop, for each loop , for in loop















