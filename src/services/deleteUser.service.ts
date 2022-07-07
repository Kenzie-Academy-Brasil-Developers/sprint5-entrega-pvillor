import { AppDataSource } from "../data-source"
import { User } from "../entities/user.entity"

const deleteUserService = async(id: string): Promise<void> => {
    const userRepository = AppDataSource.getRepository(User)

    const user = await userRepository.findOneBy({id: id})

    await userRepository.save(user)

}

export default deleteUserService