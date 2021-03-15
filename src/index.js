
// You should implement your task here.

module.exports = function towelSort (matrix) {
    if (matrix == 'undefined' || matrix == null) {
      return [];
  } else if (matrix.length == 0) {
      return matrix;
  } else {
    for(let i = 0; i < matrix.length; i++) {
        if (i % 2 != 0) matrix[i].reverse();
    }
  }
  return matrix.join().split(',');
}
