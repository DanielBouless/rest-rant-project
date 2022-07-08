const React = require('react')
const Def = require('./default')

function error404(){
    return(
        <Def>
  <head>
    <title>Wut M8?</title>
    </head>
    <body>
        <h1>Wrong hole Bruh</h1>
        <div>
            <img src="/images/tunnel.jpg" alt="" />
        </div>
    </body>
        </Def>
    )
}

module.exports = error404