import express from 'express'
import { __dirname } from './utils.js'
import productsRouter from './routes/products.router.js'
import cartsRouter from './routes/carts.router.js'
import messagesRouter from './routes/messages.router.js'
import viewRouter from './routes/view.router.js'
import './dbConfig.js'
import handlebars from 'express-handlebars'

const app = express()
const PORT = 8080

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(express.static(__dirname+'/public'))
app.use('/products',productsRouter)
app.use('/carts',cartsRouter)
app.use('/messages',messagesRouter)


// handlebars
app.engine('handlebars',handlebars.engine())
app.set('views',__dirname+'/views')
app.set('view engine','handlebars')
app.use('/chat',viewRouter)

app.listen(PORT,()=>{
    console.log(`Escuchando al puerto ${PORT}`)
})