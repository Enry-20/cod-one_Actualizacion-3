const { json, urlencoded } = require("express");
let express= require("express")
let app= express();
let morgan= require("morgan")
//Settings
app.set('port', 4000)
//Middlewares
app.use(morgan('dev'))
app.use(express.urlencoded({extended:false}))
app.use(express.json())
//Rutas links

app.use(require("./routes/rutas"))
app.use(require("./routes/busqueda"))
app.use(require("./routes/home0"))

//Server
app.listen(app.set('port'), ()=> {
    console.log("server on port "+app.set('port')+"")
})

