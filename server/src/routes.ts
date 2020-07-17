import express, { response, request } from "express";

import ItemsController from "./controllers/ItemsController";
import PointsController from "./controllers/PointsController";

const routes = express.Router();
const pointsController = new PointsController();
const itemsController = new ItemsController();

routes.get("/items", itemsController.index); //mostrar item

routes.get("/points", pointsController.index);
routes.post("/points", pointsController.create); //criar
routes.get("/points/:id", pointsController.show); //mostrar especifico

//index = listagem, show = mostrar um, create, update, delete

export default routes;
