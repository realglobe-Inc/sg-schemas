#!/usr/bin/env node

/**
 * Generate shim scripts
 */

'use strict'

process.chdir(`${__dirname}/..`)

const apeTasking = require('ape-tasking')
const ababelES2015 = require('ababel-es2015')
const filecopy = require('filecopy')

apeTasking.runTasks('shim', [
  () => ababelES2015('**/*.js', {
    cwd: 'lib',
    out: 'shim/browser'
  }),
  () => filecopy('lib/*.json', 'shim/browser', {
    force: true,
    mkdirp: true
  })
], true)
