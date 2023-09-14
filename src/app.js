import express from 'express';
import router from './routes/index.js';
import dotEnv from 'dotenv'
import LogMiddleware from './middlewares/log.middleware.js';
import ErrorHandlingMiddleware from './middlewares/error-handling.middleware.js';

dotEnv.config();

const app = express();
const port = 4000;

app.use(LogMiddleware);
app.use(express.json());
app.use('/api', router);
app.use(ErrorHandlingMiddleware);

// 메인 화면
app.get("/", (req, res) => {
  return res.json({ message: "서버확인" });
});


app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});
