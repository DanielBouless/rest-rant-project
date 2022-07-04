const router =require('express').Router()



router.get('/',(req,res)=>{
    let places = [{
        name :'Yum',
        city:'Cairo',
        state:'Egypt',
        cuisines:'Good',
        pic:'http://placekitten.com/250/250'
    },{
        name :'Yummy',
        city:'Montreal',
        state:'Quebec',
        cuisines:'shite',
        pic:'http://placekitten.com/200/200'
    }]
    res.render('places/index', {places})
})


router.get('/newplace',(req,res)=>{
    res.render('places/newplace')
})

router.get('/showplace',(req,res)=>{
    res.render('places/showplace')
})

router.get('/editplace',(req,res)=>{
    res.render('places/editplace')
})


module.exports = router