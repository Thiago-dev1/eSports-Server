import express from "express"


const app = express()


app.get('/games', (req, res) => {
    return res.status(200).json([])
})

app.post('/ads', (req, res) => {
    return res.status(201).json([])
})

app.get('games/:id/ads', (req, res) => {
    return res.status(200).json([
        {id: 1, name: "Anúncio 1"},
        {id: 2, name: "Anúncio 2"}
    ])
})

app.get('ads/:id/discord', (req, res) => {
    return res.status(200).json([])
})

app.listen(3333)