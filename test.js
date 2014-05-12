var defaults = require('./defaults')
var test = require('tape')

test('defaults: color', function(t) {
  t.deepEqual(defaults({}).color, [0, 0, 0, 1], 'nothing passed')
  t.deepEqual(defaults({ color: false }).color, false, 'false passed')
  t.deepEqual(defaults({ color: true }).color, [0, 0, 0, 1], 'true passed')
  t.deepEqual(defaults({ color: [1, 1, 0, 1] }).color, [1, 1, 0, 1], 'array passed')

  t.end()
})

test('defaults: depth', function(t) {
  t.deepEqual(defaults({}).depth, 1, 'nothing passed')
  t.deepEqual(defaults({ depth: false }).depth, false, 'false passed')
  t.deepEqual(defaults({ depth: true }).depth, 1, 'true passed')
  t.deepEqual(defaults({ depth: 10 }).depth, 10, 'number passed')

  t.end()
})

test('defaults: stencil', function(t) {
  t.deepEqual(defaults({}).stencil, false, 'nothing passed')
  t.deepEqual(defaults({ stencil: false }).stencil, false, 'false passed')
  t.deepEqual(defaults({ stencil: true }).stencil, 1, 'true passed')
  t.deepEqual(defaults({ stencil: 10 }).stencil, 10, 'number passed')

  t.end()
})
