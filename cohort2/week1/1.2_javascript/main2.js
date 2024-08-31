//complex object
//it print male first name
const personArray = ["harkirat","raman","priya"];
const genderArray = ["male","male","female"];
for(let i=0;i<personArray.length;i++){
    if(genderArray[i]=="male"){
        console.log(personArray[i]);
    }
}
//////////////////////// complex object

const allUsers = [{
    firstName : "hearkirat",
    gender : "male"
},{
    firstName : "raman",
    gender : "male"
},{
    firstName : "priya",
    gender : "female"
}]

// for(let i=0;i<allUsers.length;i++){
//     if(allUsers[i].gender=="male"){
//         console.log(allUsers[i].firstName);
//     }
// }
////////////////////////////
for(let i=0;i<allUsers.length;i++){
    if(allUsers[i]["gender"]=="male"){
        console.log(allUsers[i]["firstName"]);
    }
}








