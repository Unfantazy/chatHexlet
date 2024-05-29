import { SubmitHandler, useForm } from 'react-hook-form'
import axios from 'axios'

import { CustomInput } from '../CustomInput'

import cls from './Form.module.scss'

type Inputs = {
  username: string,
  password: string,
};
export const Form = () => {
  const { handleSubmit, control, watch } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {
    axios.post('/api/v1/login', { username: 'admin', password: 'admin' }).then((response) => {
      console.log(response.data); // => { token: ..., username: 'admin' }
    });
  };

  console.log(watch('username'))

  return (
    <form className={cls.form} onSubmit={handleSubmit(onSubmit)}>
      <CustomInput name='username' control={control} rules={{required: 'Это обязательное поле' }} label="Ваш ник"/>
      <CustomInput name='password' type='password' control={control} rules={{required: 'Это обязательное поле'}} label="Пароль"/>
      <button className={cls.submitBtn} type="submit">Войти</button>
    </form>
  )
}
