const { capitalizeAndFilter } = require('./capitalizeAndFilter');

const nameOfThings = ['spot', 'rover', 'bingo', 'fred'];

describe('takes an array of strings, capitalizing all strings and filtering out any string that starts with the letter f', () => {
  it('does it', () => {
    expect(capitalizeAndFilter(nameOfThings)).toEqual(['SPOT', 'ROVER', 'BINGO']);
  });
});