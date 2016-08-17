/**
 * Test case for performConfig.
 * Runs with karma.
 */
'use strict'

const performConfig = require('../shim/browser/perform_config.json')
const assert = require('assert')
const tv4 = require('tv4')
const co = require('co')

describe('perform-config', () => {
  before(() => co(function * () {

  }))

  after(() => co(function * () {

  }))

  it('Perform config', () => co(function * () {
    it('Validate example', () => co(function * () {
      let result = tv4.validateResult(
        require('../example/example-perform-config.json'),
        performConfig
      )
      assert.ok(result.valid)
    }))

    it('Validate invalid schema', () => co(function * () {
      let result = tv4.validateResult(
        {
          interface: 'hoge'
        },
        performConfig
      )
      assert.ok(!result.valid)
    }))
  }))
})

/* global describe, before, after, it */
