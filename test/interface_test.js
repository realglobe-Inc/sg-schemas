/**
 * Test case for interface.
 * Runs with mocha.
 */
'use strict'

const interfaceSchema = require('../lib/interface.json')
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
      require('../example/example-interface.json'),
      interfaceSchema
    )
    assert.ok(result.valid)
  }))

  it('Validate invalid schema', () => co(function * () {
    let result = tv4.validateResult(
      {
        version: "1.0.0"
      },
      interfaceSchema
    )
    assert.ok(!result.valid)
  }))
})

/* global describe, before, after, it */
