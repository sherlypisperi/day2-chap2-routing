// /pemanggilan package express

const express = require('express')

// menggunakan package express
const app = express()

const projects = [
    {
        projectName: 'HTML Introduction',
        description: 'jhb',
        duration: '7 Hari',
        nodejs: 'nodejs',
        reactjs: 'reactjs',
        nextjs: 'reactjs',
        typescript: 'typescript',
    }
]

const month = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ]

  function getDistanceTime(startDate , endDate) {
    startDate = Number(new Date(startDate) )
    endDate = Number(new Date(endDate))

    let sumDate = endDate - startDate
    const sec = 1000
    const min = 60 * sec
    const hour = 60 * min
    const day = 24 * hour
    const month = 30 * day

    let output;

    if (sumDate >= month) {
        output = Math.floor(sumDate / month) + ' Bulan'
    } else {
        output = Math.floor(sumDate / day) + ' Hari'
    }

    return  output    
}

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
    // let dataProjects = projects.map(function(data){
    //     return {
    //         ...data,
    //     }
    // })

    // console.log('-------',dataProjects);
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
    

    let project = {
        projectName, 
        description,
        duration: getDistanceTime(startDate , endDate),
        nodejs,
        reactjs,  
        nextjs,
        typescript,
    }

    projects.push(project);
    
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


// app.post('/home' , function (req,res) {
//     res.render('index')
// })
   

const port = 5000
app.listen(port, function () {
    console.log(`testing on port : ${port} `);
})