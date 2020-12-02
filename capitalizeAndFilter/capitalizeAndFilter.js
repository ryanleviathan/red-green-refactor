const capitalizeAndFilter = arr => {
  const newArr = [];
  for(let i = 0; i < arr.length; i++) {
    // arr.filter(item => !item.includes('f'))
    if(!arr[i].includes('f')) {
      const capitalizedItem = arr[i].toUpperCase();
      newArr.push(capitalizedItem)
    } 
  }
  return newArr;
}


module.exports = {
  capitalizeAndFilter
};