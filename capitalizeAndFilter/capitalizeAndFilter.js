const capitalizeAndFilter = arr => {
  const filteredArr = arr.filter(item => !item.includes('f'))
  newArr = filteredArr.map(item => item.toUpperCase());

  return newArr;
}


module.exports = {
  capitalizeAndFilter
};