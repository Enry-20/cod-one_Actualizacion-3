const {Router}= require("express")
const router= Router();
const autocomplete= require("../objects.json")


router.get('/busqueda', (req, res)=>{
    res.json(autocomplete)

})

module.exports= router