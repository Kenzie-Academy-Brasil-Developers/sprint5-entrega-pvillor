import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"
import bcrypt from "bcryptjs"
import { AppError } from "../errors/AppError"

const updateUserService = async (id: string, name: string, email: string, age: number): Promise<void> => {
    
    const userRepository = AppDataSource.getRepository(User) 

    const user = await userRepository.findOneBy({id: id})

    if(!user){
        throw new AppError("User not found", 404)
    } 

    const newPassword = bcrypt.hashSync(user!.password, 10)

    await userRepository.update(user!.id, {
        name: name,
        email: email,
        password: newPassword,
        age: age,
        updated_at: new Date()
    })
}

export default updateUserService