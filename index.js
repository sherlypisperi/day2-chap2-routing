// /pemanggilan package express

const express = require('express')

// menggunakan package express
const app = express()


//atur template enginge
app.set('view engine', 'hbs')

app.use('/Public' , express.static(__dirname + '/Public'))

//cara menirimkan data dari frontend ke backend atau body parser
app.use(express.urlencoded({ extended: false }))

app.get('/home', function (req, res) {
    res.render('home')
})

app.get('/addproject', function (req, res) {
    res.render('addproject')
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