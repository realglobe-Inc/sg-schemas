/**
 * Test case for interface.
 * Runs with mocha.
 */
'use strict'

const interfaceSpec = require('../lib/interface_spec.json')
const assert = require('assert')
const tv4 = require('tv4')
const co = require('co')

describe('interface', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Validate example', () => co(function * () {
    let result = tv4.validateResult(
      require('../example/example-interface-spec.json'),
      interfaceSpec
    )
    assert.ok(result.valid)
  }))

  it('Validate invalid schema', () => co(function * () {
    let result = tv4.validateResult(
      {
        version: "1.0.0"
      },
      interfaceSpec
    )
    assert.ok(!result.valid)
  }))
})

/* global describe, before, after, it */
