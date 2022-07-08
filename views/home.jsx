const React = require('react')
const Def = require('./default')

function home(){
    return(
        <Def>
            <head>
                <title>Hola</title>
            </head>
           <main>
    <h1>Rest-Rant</h1>
    <div>
      <img src="/images/USE_THIS_PIC.jpg" alt="A BIRD" />
      <div>
        Photo by <a href="AUTHOR_LINK">I DIDNT COPY THE INFO</a> from <a href="https://unsplash.com/s/photos/free">Unsplash</a>
      </div>
    </div>
    <a href="/places">
        <button className="btn-primary">Places Page</button>
    </a>
</main>

        </Def>
    )

}

module.exports = home