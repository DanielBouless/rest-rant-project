const router =require('express').Router()
const places = require('../models/places.js')

        

router.get('/',(req,res)=>{
    res.render('places/index', {places})
})


router.get('/new',(req,res)=>{
    res.render('places/new')
})

router.get('/:arrayIndex',(req,res)=>{
    res.render('places/showplace',{
        place: places[req.params.arrayIndex]
    })
})
router.get('/:id',(req,res)=>{
  let id = Number(req.params.id)
  if(isNaN(id)){
    res.render('error404')
  }else{
    res.render('/places/show', {place:places[id]})
  }
})

router.get('/editplace',(req,res)=>{
    res.render('places/editplace')
})

router.get('/')

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'images/defaultImage'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})


module.exports = router