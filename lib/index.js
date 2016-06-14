/**
 * Scheams for SUGOS
 * @module sg-schemas
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get interfaceSpec () { return d(require('./interface_spec')) },
  get performConfig () { return d(require('./perform_config')) }
}
