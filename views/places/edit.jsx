const React = require('react')
const Def = require('../default')

function edit_form(data){
    return(
        <Def>
            <main>
                <h1>Edit Place</h1>

                <form action={`/places/${data.id}?_method='PUT'`}>
                    <div className='row'>
                <div className='form-group col-sm-6'>
                    <label htmlFor="name">Name</label>
                    <input className='form-control ' type='text' id='name' name='name' value ={data.name} required/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="pic">Pic</label>
                    <input className='form-control' type='url' id='pic' name='pic'/>
                </div>
                <div className='form-group col-sm-6'> 
                    <label htmlFor="cuisines">Cuisines</label>
                    <input className='form-control' type='text' id='cuisines' name='cuisines' required/>
                </div>
                <div className="form-group col-sm-4">
  <label htmlFor="founded">Founded Year</label>
  <input 
    type="number" 
    className="form-control" 
    id="founded" 
    name="founded" 
    value={new Date().getFullYear()} />
</div>

                <div className='form-group col-sm-6'>
                    <label htmlFor="city">City</label>
                    <input className='form-control' type='text' id='city' name='city'/>
                </div>
                <div className='form-group col-sm-6'>
                    <label htmlFor="state">State</label>
                    <input className='form-control' type='text' id='state' name='state'/>
                </div>
                <input className='btn btn-primary' type="submit" value='Add Place'/> 
                </div>
                </form>      
            </main>
        </Def>
    )
}

module.exports = edit_form



