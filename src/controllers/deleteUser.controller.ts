import { Request, Response } from "express"
import { AppError, handleError } from "../errors/AppError"
import deleteUserService from "../services/deleteUser.service"

const deleteUserController = async (req: Request, res: Response) => {
    try {

        const id = req.params.id
        await deleteUserService(id)

        return res.status(200).json({message: "User deleted!"})
        
    } catch (err) {

        if (err instanceof AppError) {
                handleError(err, res)
            }
    }
}

export default deleteUserController