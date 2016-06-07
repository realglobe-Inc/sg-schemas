/**
 * Schemas from jsdoc
 * @module jsdoc
 */

'use strict'

let d = (module) => module.default || module

module.exports = {
  get jsdocBugs () { return d(require('./jsdoc_bugs')) },
  get jsdocContactInfo () { return d(require('./jsdoc_contact_info')) },
  get jsdocDoclet () { return d(require('./jsdoc_doclet')) },
  get jsdocDoclets () { return d(require('./jsdoc_doclets')) },
  get jsdocEnumProperty () { return d(require('./jsdoc_enum_property')) },
  get jsdocMeta () { return d(require('./jsdoc_meta')) },
  get jsdocPackage () { return d(require('./jsdoc_package')) },
  get jsdocParam () { return d(require('./jsdoc_param')) },
  get jsdocTypeProperty () { return d(require('./jsdoc_type_property')) }
}
