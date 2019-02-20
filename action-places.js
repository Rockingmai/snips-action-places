#!/usr/bin/env node
const debug = require('debug')
const { name } = require('./package.json')

// Uncomment this line to print everything
debug.enable(name + ':*')

require('./src/index')()
