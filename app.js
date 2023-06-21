
const express = require('express')
const app = express()
const tasks = require('./routes/tasks')
const connectDb = require('./db/connect')
require('dotenv').config()
const notFound = require('./middleware/not-Found')
const errorHandlerMiddleware = require('./middleware/error-handler')

// middleware
app.use(express.json())
app.use(express.static('./public'))

// routes 
app.use('/api/v1/tasks',tasks)
app.use(notFound)
app.use(errorHandlerMiddleware)


// app.get('/api/v1/tasks') - get all tasks
// app.post('/api/v1/tasks') - create a new task 
// app.get('/api/v1/tasks/:id') - get a single task
// app.patch('/api/v1/tasks/:id') - update task
// app.delete('/api/v1/tasks/:id') - delete task

const port  = process.env.port || 3000
const startDB_Server = async ()=>{
     try {
          await connectDb(process.env.MONGO_URI).then(console.log('connected to db...'))
          app.listen(port,()=>{
               console.log(`server is listening on port ${port} ...`)
          })
                    
     } catch (error) {
          console.log(error)
     }
}

startDB_Server()


