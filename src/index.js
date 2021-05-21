const express = require('express')
require('./db/mongoose')
const userRouter = require('./routers/user')//imports the router for User
const taskRouter = require('./routers/task')//imports the router for Task

const app = express()
const port = process.env.PORT

app.use(express.json())
app.use(userRouter)//express uses the information contained in the userRouter
app.use(taskRouter)//express uses the information contained in the taskRouter

app.listen(port, () => {
    console.log('Server is up on port ' + port)
})