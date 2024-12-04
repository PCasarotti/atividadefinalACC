const express=require('express');
const MusicaControl = require('../control/musicaControl.js');
const router = express.Router();
const musicaController = new MusicaControl

router.get('/', (req, res) => musicaController.getAll(req, res))
router.get('/:id', (req, res) => musicaController.getById(req, res))
module.exports=router


