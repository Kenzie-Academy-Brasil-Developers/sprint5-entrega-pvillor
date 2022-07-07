import { AppDataSource } from "../data-source"
import { IUserCreate } from "../interfaces/user"
import { v4 as uuidv4 } from "uuid"
import { User } from "../entities/user.entity"
import { hash } from "bcryptjs"

const userCreateService = async ({name, email, password, age}: IUserCreate): Promise<User> => {

    const userRepository = AppDataSource.getRepository(User)

    const hashedPassword = await hash(password, 10)
    
    const user = userRepository.create({
        id: uuidv4(),
        name,
        email,
        password: hashedPassword,
        age,
        created_at: new Date,
        updated_at: new Date,
    })

    await userRepository.save(user)
    return user

}

export default userCreateService