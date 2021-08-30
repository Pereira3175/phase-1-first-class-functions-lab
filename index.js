// Code your solution in this file!
const drivers = ['Sally', 'Bob', 'Freddy', 'Claudia'];


const returnFirstTwoDrivers = () => {
    return drivers.slice(0,2);
}

returnFirstTwoDrivers();

const returnLastTwoDrivers = () => {
    return drivers.slice(2,4);
}

returnLastTwoDrivers();

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
let i = 0
function createFareMultiplier (i) {
    return (someNum) => {
        return someNum * i
    }
}
const fareQuintupler = (someNum) => someNum **2


const fareDoubler = (someNum) =>someNum *2;


const fareTripler = (someNum) => someNum * 3;

const selectDifferentDrivers = (arrayOfDrivers, Function) => Function(arrayOfDrivers);
