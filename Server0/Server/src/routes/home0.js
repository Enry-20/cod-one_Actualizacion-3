const {Router}= require("express")
const router= Router();
const path= require("path")

router.get("/home0", (res, req)=>{
    req.sendFile("C:/Users/OK__Computer/Desktop/cod-one_Actualizacion-3/Cart/carrt.html")
})



module.exports=router