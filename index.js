var m = require('matrix-utilities')

module.exports = zoom

// input
//   current: [x, y, scale]
//   transform: [x, y, scale]
// output: [x, y, scale]
function zoom (current, transform) {
  var ma0 = m.Identity()
  var ma1 = m.Identity()
  var ma2 = m.Identity()
  var transformMatrix
  var outMatrix

  ma0[0][3] = current[0] //x
  ma0[1][3] = current[1] //y
  ma0[0][0] = current[2] //k
  ma0[1][1] = current[2] //k

  ma1[0][3] = transform[0] //x
  ma1[1][3] = transform[1] //y
  ma1[0][0] = transform[2]
  ma1[1][1] = transform[2]

  ma2[0][3] = -transform[0]
  ma2[1][3] = -transform[1]

  transformMatrix = m.multiply(ma1, ma2)
  outMatrix = m.multiply(ma0, transformMatrix)

  return [ outMatrix[0][3], outMatrix[1][3], outMatrix[0][0] ]
}
