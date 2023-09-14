import Joi from 'joi';


// /^[a-zA-Z0-9가-힣\s.!?]{2,30}$/; //영문 대소문자, 숫자, 한글, 공백, 마침표, 느낌표, 물음표를 포함
userSchema = this.joi.object({
    nickname: Joi.string().pattern(/^[a-zA-Z0-9]{3,15}$/).empty("").allow("").required().label("닉네임"),
    password: Joi.string().pattern(/^[a-zA-Z0-9]{3,15}$/).empty("").allow("").required().label("비밀번호"),
    confirm: Joi.string().valid(Joi.ref('password')).empty("").allow("").required().label("비밀번호 확인"),
});


// postSchema = this.joi.object({
//     title: Joi.string().pattern(/^[a-zA-Z0-9가-힣\s.!?]{2,30}$/).empty("").allow("").required().label("제목"),
//     content: Joi.string().pattern(/^[a-zA-Z0-9가-힣\s.!?]{2,500}$/).empty("").allow("").required().label("내용"),

// });


// commentSchema = this.joi.object({
//     comment: Joi.string().pattern(/^[a-zA-Z0-9가-힣\s.!?]{2,100}$/).empty("").allow("").required().label("댓글"),

// });



export default {
    userSchema,
    postSchema,
    commentSchema,
  };