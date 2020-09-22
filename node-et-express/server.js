const express = require('express')

const app = express()

app.listen(3000, function() {
    console.log("server started on port 3000");
})

//middleware
app.use(function(req, res, next) {
    console.log(Date.now())
    req.name = 'philippe';
    next()
})


// router
app.get('/', (req, res) => {
        res.send("coucou cest moi")
    }),

    app.get('/contact', (req, res) => {
        res.send("page contact")
    })