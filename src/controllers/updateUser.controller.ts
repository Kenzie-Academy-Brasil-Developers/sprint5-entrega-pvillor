import { Request, Response } from 'express'
import { AppError, handleError } from '../errors/AppError'
import updateUserService from '../services/updateUser.service'

    const updateUserController = async (req: Request, res: Response) => {
    
        try {
    
            const { id } = req.params
            const { name, email, age } = req.body
    
            const user =  await updateUserService(id, name, email, age)
            
            return res.status(200).json({message: "User updated!", user: user})
    
        } catch (err) {
    
            if (err instanceof AppError) {
                handleError(err, res)
            }
        }
    }
    
    export default updateUserController