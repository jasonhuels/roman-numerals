import { romanNumerals } from './../src/roman-numerals.js';

describe('romanNumerals', function() {

  it('should test whether the input is between 1 and 3,999', function() {
    expect(romanNumerals(0).toEqual(0);
    expect(romanNumerals(4000).toEqual("Roman Numerals only go up to 3,999.");
  });

});
