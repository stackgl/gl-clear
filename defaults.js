module.exports = defaults

function defaults(opts) {
  return {
      color: array(opts.color, [0, 0, 0, 1])
    , depth: number(opts.depth, 1)
    , stencil: number(opts.stencil, false)
  }
}

function number(n, def) {
  return n === false
    ? false
    : typeof n === 'undefined'
    ? def
    : n + 0
}

function array(a, def) {
  return a === false
    ? false
    : Array.isArray(a)
    ? a || def
    : def
}
