// /pemanggilan package express

const express = require('express')

// menggunakan package express
const app = express()

const isLogin = true


//atur template enginge
app.set('view engine', 'hbs')

app.use('/Public' , express.static(__dirname + '/Public'))

//cara menirimkan data dari frontend ke backend atau body parser
app.use(express.urlencoded({ extended: false }))

app.get('/home', function (req, res) {
    res.render('home', {isLogin : isLogin})
})

app.get('/addproject', function (req, res) {
    res.render ('addproject')
    
})

app.post('/addproject', function (req, res) {
    let projectName = req.body.projectName
    let startDate = req.body.startDate
    let endDate = req.body.endDate
    let description = req.body.description
    let nodejs = req.body.nodejs
    let reactjs = req.body.reactjs
    let nextjs = req.body.nextjs
    let typescript = req.body.typescript
    
    console.log (`Data project : ${projectName}`);
    console.log (`Data project : ${startDate}`);
    console.log (`Data project : ${endDate}`);
    console.log (`Data project : ${description}`);
    console.log (`Data project : ${nodejs}`);
    console.log (`Data project : ${reactjs}`);
    console.log (`Data project : ${nextjs}`);
    console.log (`Data project : ${typescript}`);
    
    res.redirect('/addproject')
})

app.get('/project-detail/:id', function (req, res) {
    let id = req.params.id
    res.render('addproject' , {id:id})
})

app.get('/contact-me', function (req, res) {
    res.render('contact')
})

app.get('/project-detail', function (req, res) {
    res.render('project-detail')
})

   

const port = 5000
app.listen(port, function () {
    console.log(`testing on port : ${port} `);
})