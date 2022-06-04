const { append } = require('express/lib/response')

const router = require('express').Router()


router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  res.send('POST /places')
})


// GET /places

router.get('/', (req, res) => {
  let places = [{
      name: 'H-Thai-ML',
      city: 'Seattle',
      state: 'WA',
      cuisines: 'Thai, Pan-Asian',
      pic: './images/header2.jpg'
    }, {
      name: 'Coding Cat Cafe',
      city: 'Phoenix',
      state: 'AZ',
      cuisines: 'Coffee, Bakery',
      pic: './images/header4.jpg'
    }]
    
  res.render('places/index', {places})

  
  
})

module.exports = router
