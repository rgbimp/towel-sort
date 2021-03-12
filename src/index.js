
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix ? matrix : [])
    .map( (item, index) => index % 2 ? item.reverse() : item)
    .reduce((accum, item) => accum.concat(item),[]);
}
