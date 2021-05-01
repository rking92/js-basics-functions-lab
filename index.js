const hqStreet = 42
const blockFeet = 264

function distanceFromHqInBlocks(value) {
    return Math.abs(value - hqStreet);
} 
function distanceFromHqInFeet(value) {
    return Math.abs(blockFeet * distanceFromHqInBlocks(value));
}
function distanceTravelledInFeet(startingBlock, endingBlock) {
    let startingBlockA = parseInt(startingBlock)
    let endingBlockA = parseInt(endingBlock)
        if (startingBlockA > endingBlockA) {
           return (startingBlockA - endingBlockA) * 264
        }
        else return(endingBlockA - startingBlockA) * 264 

}

function calculatesFarePrice(start, destination) {
    let fare = distanceTravelledInFeet(start, destination)
        if (fare <= 400) {
            return 0
        }
        if (fare >= 400 && fare < 2000) {
            return (fare - 400) * .02
        }
        if (fare >= 2000 && fare <= 2500) {
            return 25
        }
        if (fare > 2500) {
            return "cannot travel that far"
        }
    
}
