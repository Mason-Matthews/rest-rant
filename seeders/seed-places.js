const db = require('../models')

db.Place.create([{
    name: 'H-Thai-ML',
    city: 'Seattle',
    state: 'WA',
    cuisines: 'Thai, Pan-Asian',
    pic: "https://www.theworlds50best.com/filestore/jpg/W50BR2021-150-Noma-2.jpg",
    founded: 1989
}, {
    name: 'Coding Cat Cafe',
    city: 'Phoenix',
    state: 'AZ',
    cuisines: 'Coffee, Bakery',
    pic: 'https://media.vanityfair.com/photos/624db93288fcf914e1a594bc/master/w_1600%2Cc_limit/Steven%2520Joyce-JOS2021050D00077.jpg',
    founded: 2020
}])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})