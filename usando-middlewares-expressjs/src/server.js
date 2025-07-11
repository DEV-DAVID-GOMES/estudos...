const express = require('express')
const { middlewareA, middlewareB } = require('./middlewares/test')
const uploadMiddleware = require('./middlewares/upload')
const app = express()

app.use(express.static('public'))
app.use(middlewareA)


app.get('/testeA', (req, res) => {
    console.log({ a: req.middlewareA, b: middlewareB })
    res.end()
})

app.get('/testeB', middlewareB, (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB })
    res.end()
})

app.post('/upload', uploadMiddleware.single('image'), (req, res) => {
    console.log({ a: req.middlewareA, b: req.middlewareB })
    console.log(req.file, req.body)
    res.end()
})

const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log(`Servidor iniciado em http://localhost:${PORT}/`))