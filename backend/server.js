//Dependencies

let express=require('express')
let app= express()
let PORT= process.env.PORT|| 3003
let cors= require('cors')
let mongoose=require('mongoose')
let bodyParser = require('body-parser')
let email= require('./controller/sendemail')

//Database
mongoose.connection.on('error', err => console.log(err.message + ' is Mongod Ready and Running Baby?'))
mongoose.connection.on('disconnected', () => console.log('mongo disconnected'))
// database connection variable
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/datematch'
// database connection
mongoose.connect(MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true})
mongoose.connection.once('open', ()=>{
    console.log('connected to Big Goose...')
})


//middleware
app.use(express.json())

const whitelist = ['http://localhost:3000', ]
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

//user controller


let pageController= require('./controller/index.js')
app.use(pageController)

let emailController= require('./controller/sendemail')
app.use(emailController)


app.listen(PORT,()=>{
    console.log('lisenting to a playa')
})
