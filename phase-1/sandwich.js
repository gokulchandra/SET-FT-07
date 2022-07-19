/*
    callback function is called after something is done
*/ 

let otherOrdersForTableIsReady = false;
let customer = 'Alice'


function giveItToWaitStaff(food) {
    if (otherOrdersForTableIsReady) {
        console.log('Give to table ', customer)
    }
}

function makeASandwich (giveItToWaitStaff) {
      console.log('Sandwich is ready! Yummy');

    giveItToWaitStaff('sandwich');
}


makeASandwich(giveItToWaitStaff);




