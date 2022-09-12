// function functionName(parameters) {
//     function body
//     return
//  }
// var returnValue = functionName (parameters value)

function getAvarage(assignment1, assignment2, assignment3) {
    const totall = assignment1 + assignment2 + assignment3;
    const avarage = totall / 3;
    return avarage;
}

const assignment1marks = 60;
const assignment2marks = 58;
const assignment3marks = 59;

var myavarage = getAvarage(assignment1marks, assignment2marks, assignment3marks);

console.log("my avarage markse is:", myavarage);