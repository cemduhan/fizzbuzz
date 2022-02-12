import fizzbuzz from './src/fizzbuzz.js';

describe('fizbuzz', () =>{

    it('fizzbuzz with 0', () => {
        expect(fizzbuzz(0)).toEqual(['-1'])
    });

    it('fizzbuzz with 1', () => {
        expect(fizzbuzz(1)).toEqual(['1'])
    });  

});