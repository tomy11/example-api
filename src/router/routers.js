import express from 'express';
import indexController from '../controller/index.controller';
const router = express.Router();


router.get('/', indexController.post);

export default router;