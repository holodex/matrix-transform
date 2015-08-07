var create = require('gl-mat4/create')
var identity = require('gl-mat4/identity')
var multiply = require('gl-mat4/multiply')

module.exports = zoom

// input
//   current: [x, y, scale]
//   transform: [x, y, scale]
// output: [x, y, scale]
function zoom (current, transform) {
  var ma0 = create()
  var ma1 = create()
  var ma2 = create()

  identity(ma0)
  identity(ma1)
  identity(ma2)

  var transformMatrix = create()
  var outMatrix = create()

  ma0[3*4+0] = current[0] //x
  ma0[3*4+1] = current[1] //y
  ma0[0*4+0] = current[2] //k
  ma0[1*4+1] = current[2] //k

  ma1[3*4+0] = transform[0] //x
  ma1[3*4+1] = transform[1] //y
  ma1[0*4+0] = transform[2]
  ma1[1*4+1] = transform[2]

  ma2[3*4+0] = -transform[0]
  ma2[3*4+1] = -transform[1]

  console.log(ma0, ma1, ma2)

  multiply(transformMatrix, ma1, ma2)
  multiply(outMatrix, ma0, transformMatrix)

  return [ outMatrix[0*4+3], outMatrix[1*4+3], outMatrix[0*4+0] ]
}
