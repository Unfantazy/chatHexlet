import loginImg from '../assets/login.jpg'
import cls from './Login.module.scss'
import { Form } from './Form'

const LoginPage = () => {
  return (
    <div className={cls.loginPage}>
      <div className={cls.img}>
        <img src={loginImg} alt='Логин' />
      </div>
      <Form />
    </div>

  );
}

export default LoginPage
