const https=require('https')
const url='https://api.darksky.net/forecast/af9931ef6b3ecca20272645366d9790f/40,-75';

const request = https.request(url,(response)=>{
    let data= ''
response.on('data',(chunk)=>{
    data = data + chunk.toString()
console.log(chunk)
})
response.on('end',()=>{
    const body= JSON.parse(data)
    console.log(body)

})


})
request.on('error',()=>{
console.log('an error',error)
})

request.end()