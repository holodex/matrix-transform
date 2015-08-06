var m = require('matrix-utilities')

//[x, y, scale], [x, y, scalar]
module.exports = function (inVector, scalar) {
  var ma0 = m.Identity()
  var ma1 = m.Identity()
  var ma2
  var ma3
  var outMatrix

  ma0[0][3] = inVector[0]
  ma0[1][3] = inVector[1]
  ma0[0][0] = inVector[2]
  ma0[1][1] = inVector[2]

  ma1[0][3] = scalar[0]
  ma1[1][3] = scalar[1]

  if (scalar[2] !== 1) { //zoom to/from a point scalar[0], scalar[1]
    ma1[0][0] = scalar[2]
    ma1[1][1] = scalar[2]

    ma2 = m.Identity()
    ma2[0][3] = -scalar[0]
    ma2[1][3] = -scalar[1]

    ma3 = m.multiply(ma0, ma1)
    outMatrix = m.multiply(ma3, ma2)
  } else { //drag to a point scalar[0], scalar[1]
    outMatrix = m.multiply(ma0, ma1)
  }

  return [outMatrix[0][3], outMatrix[1][3], outMatrix[0][3]]
}
