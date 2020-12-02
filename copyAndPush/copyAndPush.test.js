const { copyAndPush } = require('./copyAndPush');

const numbers = [1, 2, 3];

describe('returns a new array with all the original items in it with a new item pushed to the end', () => {
  it('does it once', () => {
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });

  it('and returns unchanged original array', () => {
    expect (numbers).toEqual([1, 2, 3]);
  });
});