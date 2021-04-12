const returnFirstTwoDrivers = function(driverArray){
    return driverArray.slice(0,2)
}

const returnLastTwoDrivers = function(driverArray){
    return driverArray.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

function createFareMultiplier(numberOfFares){
    return function(fareAmount){
        return numberOfFares * fareAmount
    }
}

const fareDoubler = function(fare){
    return createFareMultiplier(2)(fare)
}

const fareTripler = function(fare){
    return createFareMultiplier(3)(fare)
}

function selectDifferentDrivers(arrayOfDrivers, funct){
    return funct(arrayOfDrivers)
}