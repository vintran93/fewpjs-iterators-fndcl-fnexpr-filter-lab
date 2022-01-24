// Code your solution here
function findMatching(drivers, str) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase() === str.toLowerCase()
    )
}

function fuzzyMatch(drivers, str) {
    return drivers.filter( possibleMatch =>
      possibleMatch.toLowerCase().indexOf(str.toLowerCase()) === 0
    )
}

function matchName(drivers, stringName) {
    return drivers.filter( record => record.name === stringName)
}