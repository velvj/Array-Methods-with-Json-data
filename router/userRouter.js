const express = require('express')
const router = express.Router()


const Authcontroller = require("../controller/usercontroller")

// router.get('/getlist', Authcontroller.getlist)
router.get('/getlength', Authcontroller.getlength)
router.get('/getFullName', Authcontroller.getFullName)
router.get('/getbyquery', Authcontroller.getbyquery)
router.get('/getuser', Authcontroller.getuser)
router.get('/getuser', Authcontroller.getuser)
router.get('/geteach', Authcontroller.geteach)
router.get('/getmap', Authcontroller.getmap)
router.get('/getlist', Authcontroller.getlist)


module.exports = router