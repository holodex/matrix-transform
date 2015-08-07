# matrix-zoom

zoom a vector around a point and scale

## install

with [npm](https://npmjs.org), run

```bash
npm install --save matrix-zoom
```

## api

```js
var zoom = require('matrix-zoom')
```

`zoom` takes in two [`vec3`](https://npmjs.org/gl-vec3) arguments, each of the format `[x, y, scale]`. the first vector is the current position and scale, the second vector is the desired position and scale transform to apply.

`zoom` returns a [`vec3`](https://npmjs.org/gl-vec3) of the new position and scale.
