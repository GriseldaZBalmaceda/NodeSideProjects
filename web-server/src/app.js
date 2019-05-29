const express = require('express')
const path = require('path')
const app = express();
const hbs=require('hbs')
//define paths for express
const publicDirPath = path.join(__dirname, '../public');
const viewsPath = path.join(__dirname,'../templates/views')
const partialsPath=path.join(__dirname,'../templates/partials')

//set up handlbars engine and views location 
app.set('view engine','hbs')
app.set('views',viewsPath)
hbs.registerPartials(partialsPath)
//setup static directory to serve
app.use(express.static(publicDirPath))

app.get('',(req,res)=>{
    res.render('index',{
        title:'Weather App',
        name:'Griselda Balmaceda'
    })
})
app.get('/about',(req,res)=>{
    res.render('about',{
        title:'About Page',
        name:'Griselda Balmaceda'
    })
})
app.get('/help',(req,res)=>{
    res.render('help',{
        title:'Help Page',
        message:'help message'
        
    })
})
app.get('/weather', (req, res) => {
    res.send({
        locationName: 'New York',
        forcast: 'Sunny 70'
    })
})
app.get('/products',(req,res)=>{
    console.log(req.query)
    if(!req.query.search){
    return res.send({
        error:'You must provide a search term'
    })
    }
    res.send({
        products:[]
    })
    
})
app.get('/help/*',(req,res)=>{
res.render('404',{
    title:"404",
    message:'Not able to find that help article'
})
})
app.get('*',(req,res)=>{
    res.render('404',{
        title:"404",
        message:'Not able to find that article'
    })
})
app.listen(8080, () => {
    console.log('server is up on port 8080')
})