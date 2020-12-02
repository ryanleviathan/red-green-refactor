const copyAndPush = (someArr, somePush) => {
  const newArr = [...someArr];
  newArr.push(somePush); {
    return newArr;
  }
}

module.exports = {
  copyAndPush
};