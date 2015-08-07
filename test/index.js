var test = require('tape')

var zoom
test('require module', function (t) {
  zoom = require('../.')
  t.equal(typeof zoom, 'function', 'zoom is function')
  t.end()
})

test('zoom a vector around a point and scale', function (t) {
  var testData = [
    [
      [0, 0, 1], [0, 0, 10],
      [0, 0, 10]
    ],
    [
      [10, 10, 1], [1, 1, 10],
      [1, 1, 10]
    ],
    [
      [10, 0, 1], [0, 10, 10],
      [10, -90, 10]
    ],
    [
      [0, 10, 1], [10, 0, 10],
      [-90, 10, 10]
    ],
    [
      [10, 10, 10], [1, 1, 1],
      [10, 10, 10]
    ],
    [
      [-10, -10, 1], [1, 1, 10],
      [-19, -19, 10]
    ],
    [
      [10, 10, -1], [10, 10, 10],
      [100, 100, -10]
    ],
    [
      [10, 10, 1], [10, 10, -10],
      [120, 120, -10]
    ]
  ]

  testData.forEach(function (data) {
    var current = data[0]
    var transform = data[1]
    var expected = data[2]

    var actual = zoom(current, transform)
    t.deepEqual(actual, expected, 'zooms correctly')
  })

  t.end()
})
