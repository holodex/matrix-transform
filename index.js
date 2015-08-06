var m = require('matrix-utilities')

//[x, y, scale]
module.exports = function (inMatrix, scalar) {
  var ma0 = m.Identity()
  var ma1
  var ma2
  ma0[0][3] = scalar[0]
  ma0[1][3] = scalar[1]

  if (scalar[2] !== 1) {
    ma[0][0] = scalar[2]
    ma[1][1] = scalar[2]

    ma1 = m.Identity()
    ma1[0][3] = -scalar[0]
    ma1[1][3] = -scalar[1]

    ma2 = m.multiply(matrix, ma0)
    
    return m.multiply(ma2, ma1)
  } else {
    return m.multiply(matrix, ma0)
  }
}
