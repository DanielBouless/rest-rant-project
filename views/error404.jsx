const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
  <head>
    <title>Wut M8?</title>
    </head>
    <body>
        <h1>Wrong Page Bruh</h1>
    </body>
        </Def>
    )
}

module.exports = error404