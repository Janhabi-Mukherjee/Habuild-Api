const {Router}= require('express');
const controller=require("../controller");
const authenticateToken=require('../middleware/autharization');

const router=Router();

router.get('/', authenticateToken, controller.getDisplay);
router.post('/:topic',controller.updateRank);


module.exports= router;