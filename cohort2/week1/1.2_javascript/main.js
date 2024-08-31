console.log("hello world");
let x=5;
console.log(x);
x ="hello";
console.log(x);

let firstName = "harkirat";
let age = 18;
let isMarried = true;

console.log("this person name is " + firstName + " and their age is " + age);

console.log("first person name is ");
console.log(firstName);

/////////////////////////////////////

if(isMarried){
    console.log(firstName + " is married");
}
else{
    console.log(firstName + " is not married");
}

////////////////////////////////////////

let answer =0;
answer = answer + 1+2+3+4+5+6;
console.log(answer);

answer =0;
for(let i=0;i<=100;i++){
    answer = answer +i;
}
console.log(answer);

///////////////////////////////////////////////

const personArray = ["harkirat", " raman", " himanshu"];
const ages = [21,22,23,24,25];
console.log(personArray[1]);

for(let i=0;i<ages.length;i++){
    if(ages[i]%2==0){
        console.log(ages[i]);
    }
}




