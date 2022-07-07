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
                <a href="/places">
  <button className="btn-primary">Places Page</button>
</a>

            </main>
        </Def>
    )

}

module.exports = home