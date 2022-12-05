const express = require('express')
const app = express()
const port = 3000

// pake ejs
app.set('view engine', 'ejs')

// deklarasi nama untuk dipanggil di index.ejs
const nama = "Sava Reyhano";

// buka halaman index.ejs
app.get('/', (req, res) => {
    res.render('index', {nama})
})

// buka halaman about.ejs
app.get('/about', (req, res) => {
    res.render('about')
})

// buka halaman contact.ejs
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.get('/product/:id', (req,res)=>{
    res.send('product id : ' + req.params.id + '<br></br>' 
    + 'category id : ' + req.query.idCat)
})

// diluar route diatas maka akan tampil halaman ini
app.use('/',(req, res) => {
    res.status(404)
    res.send('404: Page not found!')
})

// nampilin di CLI "example app port 3000"
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})