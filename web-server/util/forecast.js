const request = require('request')

const forecast = (latitude,longitude,callback)=>{
const url='https://api.darksky.net/forecast/af9931ef6b3ecca20272645366d9790f/'+ latitude +','+ longitude;
request({url,json:true},(error,{body})=>{
    if(error){
        callback('unable to connect to weather service')
    }else if(body.error){
        callback('unable to find location reee')
    }else {
        callback(undefined,body.daily.data[0].summary +' It is currently ' + body.currently.temperature + '. There is a ' + body.currently.precipProbability + '% change of rain.')
    }
})
}

module.exports=forecast
// const url = 'https://api.darksky.net/forecast/af9931ef6b3ecca20272645366d9790f/37.8267,-122.4233';
// const locationUrl = 'https://api.mapbox.com/geocoding/v5/mapbox.places/chester.json?proximity=-74.70850,40.78375&access_token=pk.eyJ1IjoiemVsZDEwMDEiLCJhIjoiY2p1ZDRlaDUwMHY4YzN5cnZybzc2ejQyNSJ9.sZs8PZW8NrU_nnBkfTuOcg'
// request({ url: url, json: true}, (error, response) => {
//     if (error) {
//         console.log('unable to conntect weather service')
//     } else if (resonse.body.error) {
//         console.log('unable to find location')

//     } else {
//         console.log(response.body.daily.data[0].summary + ' It is currently ' + response.body.currently.temperature + '. There is a ' + response.body.currently.precipProbability + '% change of rain.')

//     }

// })


