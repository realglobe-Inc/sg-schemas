/**
 * Test case for module.
 * Runs with karma.
 */
'use strict'

const moduleSpec = require('../sims/browser/module_spec.json')
const assert = require('assert')
const tv4 = require('tv4')
const co = require('co')

describe('module', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Validate example', () => co(function * () {
    let result = tv4.validateResult(
      require('../example/example-module-spec.json'),
      moduleSpec
    )
    assert.ok(result.valid)
  }))

  it('Validate invalid schema', () => co(function * () {
    let result = tv4.validateResult(
      {
        version: "1.0.0"
      },
      moduleSpec
    )
    assert.ok(!result.valid)
  }))
})

/* global describe, before, after, it */
