#!/usr/bin/env node
const program = require('commander')

program.version(require('../package').version).usage('<command> [options]')

program
  .command('make [dir]')
  .option('-o, --output [path]', 'output path')
  .description('make icon')
  .action((dir, cmd) => {
    require('../lib/make')(dir, cmd)
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
