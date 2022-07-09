const React = require('react')
const Def = require('../default')

function index (data) {
  let placesFormatted = data.places.map((place) => {
    return (
      <div key={index} className='col-sm-6'>
        <h2 className='text-center'><a href={`/places/${index}`}>{place.name}</a></h2>
        <p className='text-center'>
          {place.cuisines}
        </p>
        <img className='col align-items-center' src={place.pic} alt={place.name}/>
        <p className='text-center'>
          Located in {place.city}, {place.state}
        </p>
      </div>
    )
  })
  return (
    <Def>
        <main>
            <h1>Check oot these destiminations bruh</h1>
            <div>{placesFormatted}</div>
        </main>
    </Def>
)
}


module.exports = index