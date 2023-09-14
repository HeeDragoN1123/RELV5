import { UserService } from '../services/userService.js'


export class UserController {
userService = new UserService();

/* 회원가입 */

createUser = async(req, res, next) =>{
   
    const { nickname, password, confirm } = req.body; 

    const createdUser = await this.userService.createUser(nickname, password);

    return res.status(201).json({ message: "회원가입 성공", user: createdUser });
}



/* 로그인 */

loginUser = async(req, res, next) =>{
    const { nickname, password } = req.body;

    const loginedUser =  await this.userService.loginUser(nickname, password);
    

    return res.status(201).json({ message: "로그인 성공", user: loginedUser.user, token: loginedUser.token });
}

}
