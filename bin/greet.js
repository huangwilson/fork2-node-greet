#!/usr/bin/env node
var greet = require("../index");
var parseArgs = require('minimist');
var argv = process.argv;
var argv_parseArgs = parseArgs(argv);
// console.log(argv_parseArgs);
console.log(greet(argv_parseArgs._[2],argv_parseArgs.drunk));