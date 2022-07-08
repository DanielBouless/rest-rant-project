const router =require('express').Router()



router.get('/',(req,res)=>{
    let places = [{
        name :'Yummy',
        city:'Cairo',
        state:'Egypt',
        cuisines:'Good',
        pic:'/images/prometheus.jpg'
    },{
        name :'Yum',
        city:'Montreal',
        state:'Quebec',
        cuisines:'shite',
        pic:'/images/Yuh.jpg'
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