import React from 'react'
import CustomizedSelects from './components/Input'

const Login = () => {
  return (
    <div>
        <div className='w-[30%] m-auto pt-10 pb-10'>
          <p className='text-2xl font-bold'>Войти или создать профиль</p>
          <CustomizedSelects/>
          <button className='w-[85%] bg-violet-700 text-white h-[8vh] rounded-xl mt-5'>Получить код</button>
          <div className='flex items-center mt-5'>
            <input type="checkbox" />
            <p className='ml-2'>Чужой Компьютер</p>
          </div>
          <div className='flex items-center mt-5'>
            <input type="checkbox" />
            <p className='ml-2'>Соглашаюсь с правилами пользования торговой площадкой и возврата</p>
          </div>
        </div>
    </div>
  )
}

export default Login