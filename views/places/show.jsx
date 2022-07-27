const React = require('react')
const Def = require('../default')

function show (data) {

    let comments = (
      <h3 className="inactive">
        No comments yet!
      </h3>
    )
    if (data.place.comments.length) {
      comments = data.place.comments.map(c => {
        return (
          <div className="border">
            <h2 className="rant">{c.rant ? 'Rant! ðŸ˜¡' : 'Rave! ðŸ˜»'}</h2>
            <h4>{c.content}</h4>
            <h3>
              <stong>- {c.author}</stong>
            </h3>
            <h4>Rating: {c.stars}</h4>
          </div>
        )
      })
    }
    return (
        <Def>
  <main>
    <div className="row">
      <div className="col-sm-6">
        <img src={data.place.pic} alt={data.place.name} />
        <h3>
          Located in {data.place.city}, {data.place.state}
        </h3>
      </div>
      <div className="col-sm-6">
        <h2>
          Description
        </h2>
        <h3>
          {data.place.showEstablished()}
        </h3>
        <h4>
          Serving {data.place.cuisines}
        </h4>
    </div>
    </div>
    <a href={`/places/${data.place.id}/edit`} className="btn btn-warning"> 
  Edit
</a>  
<form method="POST" action={`/places/${data.place.id}?_method=DELETE`}> 
  <button type="submit" className="btn btn-danger">
    Delete
  </button>
</form>     

    <hr/>
    <h2>Comments</h2>
    {comments}
<form method="POST" action={`/places/${data.place.id}/comment?_method=PUT`}>
<div className="form-group">
<div className="mb-3 col-sm-6">
  <label htmlFor="exampleFormControlInput1" className="form-label" >Your Name</label>
  <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Name" name='author'/>
</div>
<div className="mb-3 col-sm-6">
  <label htmlFor="exampleFormControlTextarea1" className="form-label ">Enter Your Stupid Comment Here</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name='content'></textarea>
</div>
Rating:
<div className="input-group mb-3">
  <button className="btn btn-outline-secondary" type="button">1 Star</button>
  <button className="btn btn-outline-secondary" type="button">2 Star</button>
  <button className="btn btn-outline-secondary" type="button">3 Star</button>
  <button className="btn btn-outline-secondary" type="button">4 Star</button>
  <button className="btn btn-outline-secondary" type="button">5 Star</button>
  <input type="text" className="form-control" placeholder="" aria-label="Example text with two button addons" name='stars'/>
</div>
<div class="form-check">
  <input class="form-check-input" type="number" value="" id="flexCheckDefault" name='rant'/>
  <label class="form-check-label" for="flexCheckDefault">
    Rant
  </label>
</div>
</div>
  <button type="submit" className="btn btn-warning">
    Comment
  </button>
</form>

  </main>
</Def>

    )
}

module.exports = show



