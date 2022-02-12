/**
* Returns the fizzbuzz restult as string array
* @param {Number} number
* @returns {String|Array} Sum of a and b or an array that contains a, b and the sum of a and b.
*/
function fizzbuzz(number){
    if(number <= 0){
        return ['-1']
    }

    return [number.toString()]
}

export default fizzbuzz