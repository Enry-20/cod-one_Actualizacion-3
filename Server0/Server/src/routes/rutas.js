const {Router}=require("express")
const router= Router()
//Rutas
router.get('/', (req, res)=>{
    res.json({"Title":"hola cerdo"})
})

router.get('/juan', (req, res)=>{
    const obj0={
        "name":"juan",
        "webSite":"juan.com"
    }
    res.json(obj0)
})
module.exports= router;