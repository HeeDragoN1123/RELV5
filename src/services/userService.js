import {UserRepository} from '../repositories/userRepo.js'
import bcrypt from 'bcrypt';

export class UserService {
userRepository = new UserRepository();


/* 회원가입 */
async createUser(nickname, password) {
const isExistUser = await this.userRepository.findNickname(nickname);  

if(isExistUser){
    throw new Error('중복된 닉네임 입니다.')
}


        // 랜덤한 솔트 생성
        const saltRounds = 10; // 원하는 라운드 수 설정
        const salt = await bcrypt.genSalt(saltRounds);

        // 솔트와 비밀번호를 결합하여 해시화
        const hashedPassword = await bcrypt.hash(password, salt);

        // 저장소(Repository)에게 데이터를 요청합니다.
        const createUser = await this.userRepository.createUser(
            nickname,
            hashedPassword,
            salt,
    );
    
    return {
        userId : createUser.userId,
        nickname: createUser.nickname,
        // password : createUser.hashedPassword,  // 확인용
        // salt : createUser,salt, // 확인용 보여지면 안됨
    }

    // const hashedPassword = await bcrypt.hash(password, 10);

    // const createdUser = await this.userRepository.createUser(nickname,hashedPassword);

    // return {nickname: createdUser.nickname};


    // return {
    //     userId: user.userId,
    //     nickname: user.nickname,
    //     // password : createUser.password,
    // };

}

/* 로그인 */

async loginUser(nickname, password) {

    // 사용자 정보를 데이터베이스에서 가져옴
    const user = await this.userRepository.findNickname(nickname);

    if (!user) {
        throw new Error('사용자를 찾을 수 없습니다.');
    }

    // 비밀번호 검증
    const passwordMatch = await bcrypt.compare(password, user.hashedPassword);

    if (!passwordMatch) {
        throw new Error('비밀번호가 일치하지 않습니다.');
    }

    // JWT 토큰 발급 
    const token = jwt.sign({ userId: user.userId }, 'customized-secret-key', { expiresIn: '1h' });
    // dotenv 로 SESSION_SECRET_KEY="customized_secret_key" 로 바꿔야함

    return { user, token }; // 사용자 정보와 토큰을 반환

}



}
