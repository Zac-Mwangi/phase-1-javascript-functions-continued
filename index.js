// code your solution here
function saturdayFun(activityy = 'roller-skate'){
    return "This Saturday, I want to "+activityy+"!"
}

function mondayWork(activityyy = 'go to the office'){
    return 'This Monday, I will '+activityyy+"."
}

// const mondayWork = function (activityyy = 'go to the office') {
//     return 'This Monday, I will '+activityyy+"."
//   };

// function wrapAdjective(){

// }
function wrapAdjective(adjective){
    const specialChar=function(char){
        return `You are ${adjective}${char}${adjective}!`
    }
    return specialChar
 }
 wrapAdjective('*')

//  console.log( wrapAdjective('*'))