import {prisma} from '../utils/prisma/index.js'

export class UserRepository {

    /* 닉네임 찾기 */
    findNickname = async (nickname) => {
        return await prisma.users.findFirst({
          where: { nickname },
        });
      };
      
      
      /* 회원가입 */
    async createUser(nickname, password) {

        // ORM인 Prisma에서 Users 모델의 create 메서드를 사용해 데이터를 요청합니다.
        const user = await prisma.users.create({
          data: {
            nickname,
            password,
          },
        });
        return user;
    }

    /* 로그인 */
    async loginUser(nickname) {
          const user = await prisma.users.findUnique({
            where: { nickname },
          });
          return user;
        } 

}

