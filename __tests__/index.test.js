"use strict"

const config = require("../")
const fs = require("fs")
const Linter = require("eslint").Linter
const linter = new Linter()

const CLIEngine = require('eslint').CLIEngine
const cli = new CLIEngine({
  configFile: './index.js'
})

const validScript = fs.readFileSync('./__tests__/valid.js', 'utf-8')

const findFailure = (messages, ruleName) => {
  return messages.find(message => message.ruleId === ruleName)
}

describe('emits no errors with valid input', () => {
  let report

  beforeEach(() => {
    report = cli.executeOnFiles(['__tests__/valid.js'])
  })

  it ('allows dangling commas', () => {
    expect(findFailure(report.results[0].messages, 'comma-dangle')).not.toBeDefined()
  })
})
