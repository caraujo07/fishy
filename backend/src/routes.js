import { Router } from "express";
import UserController from "./app/controllers/UserController";
import PersonController from "./app/controllers/PersonController";
import SessionController from "./app/controllers/SessionController";

import authMiddleware from "./app/middlewares/auth";

const routes = new Router();

routes.post("/users", UserController.store);
routes.post("/people", PersonController.store);
routes.post("/sessions", SessionController.store);

// routes.post("/people", async (req, res) => {
//   const person = await Person.create({
//     nome: "César O. araújo",
//     nascimento: "26/12/1996",
//     cpf: "116.008.324-07",
//     telefone: "81 982797729",
//     estadoCivil: "Solteiro",
//     ocupacao: "Engenheiro",
//     numeroDeFamiliares: "4",
//     nis: "11111111111",
//     rua: "Santa Rita",
//     numero: "38",
//     complemento: "casa",
//     bairro: "Guadalajara"
//   });

//   return res.json(person);
// });

routes.use(authMiddleware);

routes.put("/users", UserController.update);

export default routes;
