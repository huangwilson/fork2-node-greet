greet = require("./index")
parseArgs = require("minimist")
argv = process.argv
argv_parseArgs = parseArgs(argv)
module.exports = command = () ->
  # console.log(argv_parseArgs);
  console.log greet(argv_parseArgs._[2], argv_parseArgs.drunk)