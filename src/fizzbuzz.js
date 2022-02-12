/**
* Returns the fizzbuzz restult as string array
* @param {Number} number
* @returns {String|Array} Sum of a and b or an array that contains a, b and the sum of a and b.
*/
function fizzbuzz(number){
    var arr = []    
    if(number <= 0){
        return ['-1']
    }
    if(typeof(number) != typeof(0)){
        return ['-1']
    }
    for (let x=1 ; x<=number ; x+=1) {
        let appends = ''
        if(x % 15 === 0){
            appends = 'fizzbuzz'
        }else if(x % 3 === 0){
            appends = 'fizz'
        }else if(x % 5 === 0){
            appends = 'buzz'
        }else{
            appends = x.toString()
        }
        arr.push(appends)
    }
    return arr
}

export default fizzbuzz