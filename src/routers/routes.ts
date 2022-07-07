import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import userCreateController from "../controllers/userCreate.controller";
import userListController from "../controllers/userList.controller";

const routes = Router()

routes.post('', userCreateController)
routes.get('', userListController)
routes.get(':id', )
routes.patch(':id', )
routes.delete(':id', deleteUserController)

export default routes