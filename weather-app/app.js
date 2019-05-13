const geocode = require('./util/geocode')
const forecast = require('./util/forecast')
const address = process.argv[2]

geocode(address, (error, {latitude,longitude,location}) => {
    if (!address) {
        console.log('Provide a location')
    } else {
        if (error) {
            return console.log(error)
        }

        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return console.log(error)
            }
            console.log(location)
            console.log(forecastData)
        })
    }

})