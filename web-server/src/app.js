const express = require('express')
const path = require('path')

const publicDirPath = path.join(__dirname, '../public');

const app = express();
app.use(express.static(publicDirPath))

app.get('/weather', (req, res) => {
    res.send({
        locationName: 'New York',
        forcast: 'Sunny 70'
    })
})

app.listen(8080, () => {
    console.log('server is up on port 8080')
})