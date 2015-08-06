var m = require('matrix-utilities')

//[x, y, scale], [x, y, scalar]
module.exports = function (coords, transform) {
  var ma0 = m.Identity()
  var ma1 = m.Identity()
  var ma2
  var transformMatrix
  var outMatrix

  ma0[0][3] = coords.vector[0] //x
  ma0[1][3] = coords.vector[1] //y
  ma0[0][0] = coords.scale //k
  ma0[1][1] = coords.scale //k

  ma1[0][3] = transform.vector[0] //x
  ma1[1][3] = transform.vector[1] //y

  if (transform.scale && transform.scale !== 1) { //zoom to/from a point scalar[0], scalar[1]
    ma1[0][0] = transform.scale
    ma1[1][1] = transform.scale

    ma2 = m.Identity()
    ma2[0][3] = -transform.vector[0]
    ma2[1][3] = -transform.vector[1]

    transformMatrix = m.multiply(ma1, ma2)
    outMatrix = m.multiply(ma0, transformMatrix)
  } else { //drag to a point scalar[0], scalar[1]
    outMatrix = m.multiply(ma0, ma1)
  }

  return { vector: [ outMatrix[0][3], outMatrix[1][3] ], scale: outMatrix[0][0] }
}
