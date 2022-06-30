import { Router } from "express";
import multer from 'multer';
import uploadConfig from './config/upload';

import SessionController from "./controllers/SessionController";
import HouseController from "./controllers/HouseController";
import DashboardController from './controllers/DashboardControler';
import ReserveController from './controllers/ReserveController'

const routes = new Router();
const upload = multer(uploadConfig)

//Rota para iniciar um login ou se cadastrar
routes.post("/sessions", SessionController.store);

// Rota criar casas
routes.post("/houses", upload.single('thumbnail'),HouseController.store);

// Rota para filtrar e mostrar casas disponiveis/indisponiveis ou status: true/false
routes.get('/houses', HouseController.index);

//Rota para editar casas
routes.put('/houses/:house_id', upload.single('thumbnail'), HouseController.update)

//Rota para deletar casa
routes.delete('/houses', HouseController.destroy)

//Rota Dashboard
routes.get('/dashboard', DashboardController.show);

routes.post('/houses/:house_id/reserve', ReserveController.store )

export default routes;
