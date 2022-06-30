import { Router } from "express";
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";

const routes = new Router();
const upload = multer(uploadConfig)

//Rota para iniciar um login ou se cadastrar
routes.post("/sessions", SessionController.store);

// Rota criar casas
routes.post("/houses", upload.single('thumbnail'),HouseController.store);

// Rota para filtrar e mostrar casas disponiveis/indisponiveis ou status: true/false
routes.get('/houses', HouseController.index);
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)
routes.delete('/houses', HouseController.destroy)

export default routes;
