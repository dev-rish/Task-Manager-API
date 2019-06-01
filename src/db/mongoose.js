const mongoose = require('mongoose')
//mongodb+srv://taskmanager:<password>@task-manager-iwgae.mongodb.net/test
// const databaseName = 'task-manager-api'
const connectionURL = process.env.MONGODB_URI

mongoose.connect(connectionURL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false // To address DeprecationWarning
})