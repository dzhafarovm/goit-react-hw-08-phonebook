import { NavLink } from 'react-router-dom';

export default function HomeView() {
  return (
    <>
      <h1>Телефонная книга</h1>
      <h2>Добро пожаловать</h2>
      <h3>
        Пожалуйста, авторизируйся, чтоб начать пользоваться телефонной книгой
      </h3>
      <h4>
        {'Для того, чтоб зарегистрироваться, нажми '}
        <NavLink to="/register">здесь</NavLink>
      </h4>

      <h4>
        {'Если Ты уже зарегитрированный пользователь, введи логин и пароль '}
        <NavLink to="/login">здесь</NavLink>
      </h4>
    </>
  );
}
