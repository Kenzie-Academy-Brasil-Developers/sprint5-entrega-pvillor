import { Request, Response } from 'express'
import { AppError, handleError } from '../errors/AppError'
import userDataService from '../services/userData.service'

const userDataController = async (req: Request, res: Response) => {

    try {

        const id = req.params.id
        const user = await userDataService(id)

        return res.json(user)
        
    } catch (err) {

        if (err instanceof AppError) {
            handleError(err, res)
        }
    }
}

export default userDataController