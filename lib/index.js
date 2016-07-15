/**
 * Scheams for SUGOS
 * @module sg-schemas
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get moduleSpec () { return d(require('./module_spec')) },
  get performConfig () { return d(require('./perform_config')) }
}
