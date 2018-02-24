#!/usr/bin/env node
const {execSync} = require('child_process')

const lastArg = process.argv[process.argv.length - 1].trim().toLowerCase()
const mode = ["--watch", "--repl"].includes(lastArg) ? ` ${lastArg}` : ""

execSync(`java -cp ~/cljs.jar:src clojure.main conf.clj${mode}`, {stdio: 'inherit', shell: true})

