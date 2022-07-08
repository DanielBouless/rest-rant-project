const React = require('react')
const Def = require('../default')


function showplace({place}){
    return(
        <Def>
               <head>
    <title>Show Place</title>
    </head>
    <body>
        <h1>Show Place</h1>
        <div className='col-sm-6'>
        <h2 className='text-center'>{place.name}</h2>
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img className='col align-items-center' src={place.pic} alt={place.name}/>
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    </body>
        </Def>
    )
}

module.exports = showplace

