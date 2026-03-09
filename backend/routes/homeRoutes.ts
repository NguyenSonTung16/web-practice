import {getHome} from '../controllers/homeController';
import express from "express";
const router= express.Router();
router.get('/home', getHome);
export default router;

