import { Router } from "express";
import User from "./app/models/User";

const routes = new Router();

routes.get("/", async (req, res) => {
  const user = await User.create({
    name: "César O. Araújo",
    email: "caraujo@jc.com.br",
    password_hash: "654asd321"
  });
  return res.json(user);
});

export default routes;
