const express = require('express')

const app = express()
const port = 3000

const postsRouter = require('./routers/posts')

app.use(express.static('public'))
app.use('/posts', postsRouter)

app.get('/health', (req, res) => {
    res.json({ status: "Applicazione in funzione." })
})

app.get("/", (req, res) => {
    res.send("Server del mio blog")
})

app.get("/bacheca", (req, res) => {
    res.json(post)
})

app.listen(port, () => {
    console.log("App di esempio lanciata sulla porta", port)
})
