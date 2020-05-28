const request = require('request')

const forecast = (longitude, latitude, callback) => {
    const url = 'http://api.weatherstack.com/current?access_key=9dcd0530c89d8bde52eb329c5632c4d9&query=' + longitude + ',' + latitude // + '&units=f'
    request({url, json: true}, (error, {body}) => {
        if (error) {
            callback('unable to contact weather services', undefined)
        } else if (body.error) {
            callback('Unable to find location', undefined)
        } else if (body.current.weather_descriptions[0]) {
            callback(undefined, body.current.weather_descriptions[0] + '. It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        } else {
            callback(undefined, 'It is currently ' + body.current.temperature + ' degrees out. It feels like ' + body.current.feelslike + ' degrees out.')
        }
    })

}

module.exports = forecast
