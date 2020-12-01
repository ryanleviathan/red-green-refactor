const { getName } = require('./getName');

describe('returns name property of object', () => {
  it('retrieves a name', () => {
    const spot = {
      name: 'spot',
      age: 5,
      weight: '20 lbs'
    };
    expect(getName(spot)).toEqual('spot');
  });

  it('retrieves another name', () => {
    const rover = {
      name: 'rover',
      age: 7,
      weight: '35 lbs'
    };
    expect(getName(rover)).toEqual('rover');
  });
});