import { NavLink } from 'react-router-dom';

export default function HomeView() {
  return (
    <>
      <h1>Телефонная книга</h1>
      <h2>Добро пожаловать</h2>
      <h3>Авторизируйся, чтоб начать пользоваться телефонной книгой</h3>
      <h4>
        <NavLink to="/register">ЗАРЕГИСТРИРОВАТЬСЯ</NavLink>
      </h4>

      <h4>
        <NavLink to="/login">ЛОГИН</NavLink>
      </h4>
    </>
  );
}
