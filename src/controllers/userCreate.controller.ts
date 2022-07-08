import { Request, Response } from 'express'
import { AppError, handleError } from '../errors/AppError'
import userCreateService from '../services/userCreate.service'

const userCreateController = async (req: Request, res: Response) => {

    try {

        const { name, email, password, age } = req.body
        const newUser = await userCreateService({name, email, password, age})
        
        return res.status(201).json(newUser)

    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userCreateController