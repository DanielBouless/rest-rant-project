const React = require('react')
const Def = require('../default')

function new_form(){
    return(
        <Def>
            <main>
                <h1>Add A New Place</h1>

                <form action="/places" method='POST'>
                <div className='form-group'>
                    <label htmlFor="name">Name</label>
                    <input className='form-control' type='text' id='name' name='name' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="pic">Pic</label>
                    <input className='form-control' type='url' id='pic' name='pic'/>
                </div>
                <div className='form-group'> 
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' type='text' id='cuisines' name='cuisines' required/>
                </div>
                <div className='form-group'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' type='text' id='city' name='city'/>
                </div>
                <div className='form-group'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' type='text' id='state' name='state'/>
                </div>
                <input className='btn btn-primary' type="submit" value='Add Place'/> 
                </form>     
            </main>
        </Def>
    )
}

module.exports = new_form