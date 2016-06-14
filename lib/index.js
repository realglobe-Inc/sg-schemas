/**
 * Scheams for SUGOS
 * @module sg-schemas
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get interface () { return d(require('./interface')) }
}
