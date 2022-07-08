import { AppDataSource } from "../data-source"
import { IUserCreate } from "../interfaces/user"
import { v4 as uuidv4 } from "uuid"
import { User } from "../entities/user.entity"
import { hash } from "bcryptjs"
import { AppError } from "../errors/AppError"

const userCreateService = async ({name, email, password, age}: IUserCreate): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)
    
    const user = new User ()
    user.id = uuidv4()
    user.name! = name
    user.email! = email
    user.password! = hashedPassword
    user.age! = age
    user.created_at = new Date
    user.updated_at = new Date

    const sameEmail = await userRepository.findOneBy({email: user.email})

    if(sameEmail){
        throw new AppError("Email already exists")
    }

    userRepository.create(user)
    await userRepository.save(user)

    return user

}

export default userCreateService