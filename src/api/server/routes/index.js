import Router from "express";
import { getAllUsers } from "../controllers/user.js";
import { getAllcars } from "../controllers/car.js";
import { getAllUsersCat } from "../controllers/userCategoria.js";
import { getAllTipoIntervencao } from "../controllers/tipoIntervencao.js";
import { getAllIntervencao } from "../controllers/intervencao.js";
import { getAllUserCars } from "../controllers/userCars.js";
const routes = Router();
routes.get("/", getAllUsers);
routes.get("/cars", getAllcars);
routes.get("/usercat", getAllUsersCat);
routes.get("/tipoIntervencao", getAllTipoIntervencao);
routes.get("/intervencao", getAllIntervencao);
routes.get("/getAllUserCars", getAllUserCars);
export { routes };
