require('dotenv').config()


const express = require('express')
const app = express()

app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())

app.use('/places', require('./controllers/places'))

app.get('/',(req,res)=>{
    res.render('home')
})

// app.get('/places',(req,res)=>{
//     let places = [{
//         name :'Yum',
//         city:'Cairo',
//         state:'Egypt',
//         cuisines:'Good',
//         pic:'http://placekitten.com/250/250'
//     },{
//         name :'Yummy',
//         city:'Montreal',
//         state:'Quebec',
//         cuisines:'shite',
//         pic:'http://placekitten.com/200/200'
//     }]
//     res.render('places/index', {places})
// })

app.get('*', (req,res)=>{
    res.render('error404')
})
app.listen(process.env.PORT, ()=>{
    console.log(`I'm Alive`)
})