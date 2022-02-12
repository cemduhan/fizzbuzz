import fizzbuzz from './src/fizzbuzz.js';

describe('fizbuzz', () =>{

    it('fizzbuzz with 0', () => {
        expect(fizzbuzz(0)).toEqual(['-1'])
    });

    it('fizzbuzz with 1', () => {
        expect(fizzbuzz(1)).toEqual(['1'])
    });  

    it('fizzbuzz with text', () => {
        expect(fizzbuzz('trial')).toEqual(['-1'])
    });

    it('fizzbuzz with 3', () => {
        expect(fizzbuzz(3)).toEqual(['1','2','fizz'])
    });

    it('fizzbuzz with 5', () => {
        expect(fizzbuzz(5)).toEqual(['1','2','fizz','4','buzz'])
    });

    it('fizzbuzz with 15', () => {
        expect(fizzbuzz(15)).toEqual(['1','2','fizz','4','buzz','fizz','7','8','fizz','buzz','11','fizz','13','14','fizzbuzz'])
    });
});