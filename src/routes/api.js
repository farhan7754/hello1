const express =require('express');
const studentController = require("../controllers/studentController");
const router=express.Router();
router.post('/create',studentController.createStudent);
router.get('/read',studentController.readStudent);
router.put('/update',studentController.updateStudent);
router.delete('/delete',studentController.deleteStudent);
module.exports=router;