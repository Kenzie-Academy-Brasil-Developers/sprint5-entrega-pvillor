import { Router } from "express";
import deleteUserController from "../controllers/deleteUser.controller";
import updateUserController from "../controllers/updateUser.controller";
import userCreateController from "../controllers/userCreate.controller";
import userDataController from "../controllers/userData.controller";
import userListController from "../controllers/userList.controller";

const routes = Router()

routes.post('', userCreateController)
routes.get('', userListController)
routes.get('/:id', userDataController)
routes.patch('/:id', updateUserController)
routes.delete('/:id', deleteUserController)

export default routes