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