// callback function______

const taskOne = () =>{
    setTimeout(() => {
        document.write("I am Abdul Motaleb");
        document.write("<br/>");
        document.write("<br/>");
    }, 3000);
}

const taskTwo = () =>{
    setTimeout(()=>{
        document.write("I am Nila Akter");
        document.write("<br/>");
        document.write("<br/>");
    },2700);
}
const taskThree = () =>{
    setTimeout(() => {
        document.write("I am Lipon khan");
        document.write("<br/>");
        document.write("<br/>");
    }, 2500);
}
const taskFour = () =>{
    setTimeout(() => {
        document.write("I am Munna Islam");
        document.write("<br/>");
        document.write("<br/>");
    }, 2200);
}
const taskFive = () =>{
    setTimeout(() => {
        document.write("I am Ripon Khan");
        document.write("<br/>");
        document.write("<br/>");
    }, 2000);
}
const taskSix = () =>{
    setTimeout(() => {
        document.write("I am Anisul sir");
        document.write("<br/>");
        document.write("<br/>");
    }, 1700);
}
const taksSeven = () =>{
    setTimeout(() => {
        document.write("<h1>I am Jonker Mahabub<h1>");
        // document.write("<br/>");
    }, 1300);
}
const taskEight = () =>{
    setTimeout(() => {
        document.write("I am Choyti Akter");
        document.write("<br/>");
        document.write("<br/>");
    }, 1500);
}

// taskOne(function f1(){
//     taskTwo(function f2(){
//         taskThree(function f3(){
//             taskFour()
//         },4000);
//     });
// });
taskOne();
taskTwo();
taskThree();
taskFour();
taskFive();
taskSix();
taksSeven();
taskEight();