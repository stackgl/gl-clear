exports.color = color => array(color, [0, 0, 0, 1])

exports.depth = depth => number(depth, 1)

exports.stencil = stencil => number(stencil, false)

function number(n, def) {
  if (n === false) return false
  if (typeof n === 'undefined') return def
  return n + 0
}

function array(a, def) {
  if (a === false) return false
  if (Array.isArray(a)) return a || def
  return def
}
