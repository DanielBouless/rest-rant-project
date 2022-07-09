const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{ data.place.name }</h1>

            <p>Currently unrated</p>
            <p>Currently no comments</p>
          </main>
        </Def>
    )
}

module.exports = show
