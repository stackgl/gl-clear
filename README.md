# gl-clear [![experimental](http://badges.github.io/stability-badges/dist/experimental.svg)](http://github.com/badges/stability-badges)

A helper WebGL module for clearing the current buffer – extracted from
[@mikolalysenko](http://github.com/mikolalysenko)'s
[gl-now](http://github.com/mikolalysenko/gl-now).

## Usage

[![NPM](https://nodei.co/npm/gl-clear.png)](https://nodei.co/npm/gl-clear/)

### clear = glClear(options)

Creates a clear function for you, accepting the following options:

* `color`: An RGBA array for the colors to clear the buffer to, between 0 and 1.
  Set to `false` to disable.
* `depth`: A single value to clear the depth buffer to. Set to `false` to disable.
* `stencil`: A single value to clear the stencil buffer to, disabled by default.

### clear(gl)

Clears the current buffer on the `gl` context.

## License

MIT. See [LICENSE.md](http://github.com/hughsk/gl-clear/blob/master/LICENSE.md) for details.
