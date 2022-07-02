const React = require('react')
const Def = require('./default')

function home(){
    return(
        <Def>
            <head>
                <title>Hola</title>
            </head>
            <main>
                <h1>HOME</h1>
            </main>
        </Def>
    )

}

module.exports = home