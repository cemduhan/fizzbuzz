import fizzbuzz from './src/fizzbuzz.js';

describe('fizbuzz', () =>{

    it('fizzbuzz with 0', () => {
        expect(fizzbuzz(0)).toEqual(['-1'])
    });

});