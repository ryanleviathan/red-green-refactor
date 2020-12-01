const { copyAndPush } = require('./copyAndPush');

describe('returns a new array with all the original items in it with a new item pushed to the end', () => {
  it('does it once', () => {
    const numbers = [1, 2, 3];
    expect(copyAndPush(numbers, 4)).toEqual([1, 2, 3, 4]);
  });

  it('and does it again', () => {
    const numbers = [1, 2, 3, 4];
    expect(copyAndPush(numbers, 5)).toEqual([1, 2, 3, 4, 5]);
  });
});