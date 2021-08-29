console.log('APP!')

const express = require ('express')

const authRouter = require('./routes/auth.routes')
const mongoose = require('mongoose')
const config = require('config')

const app = express()
const cors = require('./middleware/cors.js')
// const cors = require('cors')
app.use(cors)
app.use(express.json())
app.use("/api/auth" , authRouter)
const PORT = config.get('port') || 5000
async function start(){
    try{
        await mongoose.connect(config.get('mongoUri'), {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        })
        app.listen(PORT, () => console.log(`server has been started on ${PORT}...`))
    }catch(e){
        console.log('Server Error', e.message)
        process.exit(1)//завершение процесса
    }
}
start()

