import express from 'express'
import routes from './routers/routes'
import "reflect-metadata"
import appErrorMiddleware from './middlewares/appError.middleware'

const app = express()

app.use(express.json())

app.use('/users', routes)

app.use(appErrorMiddleware)

export default app