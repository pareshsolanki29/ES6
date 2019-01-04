let word1 = "Paresh";
let word2 ="Solanki";
 let num1 = 1;
 let num2 = 2;
  //template literal 
 const fullName  = `${word1}  ${word2}`;
  let example = `hello
                 world`;
                 document.getElementById("example").innerHTML = fullName + example;
console.log(example);
//destructure
const personalInfo = {
firstName :'Paresh',
lastName : 'solanki',
city : 'Stamford',
state : 'CT',
zipCode : '06902',
};

const {firstName, lastName} = personalInfo;
console.log(`${firstName} ${lastName}`);
const {city: ct, state: st} = personalInfo;
console.log(`${ct} ${st}`);

//destructure arrays

let [ftName, language, ltName] = ['Paresh', 'JavaScript', 'Coder'];
language  = "typeScript";
console.log( language);

//object literals

function addressChange(city, state){
    const newAddress = {city, state}
    console.log(newAddress)
}
addressChange('San Francisco', 'CA');



//For of loop
let incomes =[1233, 34545, 65758];
let total = 0;
for(const income  of incomes){
    console.log(income);
    total += income;
} 
console.log(total);

let fullNomen = 'Paresh Solanki';

for (const char of fullNomen){
    console.log(char);
}

//Spread Operator

let egs = [1,2,3,4,5,6]
let egs1 = [...egs]

console.log(egs1);


let example1 = {
    firstName: 'Papi'
}

let example2 = {
    ...example1
}


//Rest Operator


function add(...nums){
  console.log(nums)

}

add(4, 4, 5, 6, 7);


//Arrow functions


function sum1(...nums) {
  let total = nums.reduce((x, y ) => x + y)
  console.log(total);
}
sum1(1, 2, 3,4 );


//Default Params

function sum2(numArray){
    let total = 0;
    numArray.forEach(element => {
        total += element
        
    });

    console.log(total);
}

sum2(2);


//Includes

let numArr = [1,2,3,4,5]
console.log(numArr.includes(0));


//let const


/*let has block scope */
/* const cannot be reassigned*/


//import export

