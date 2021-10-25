import { NavLink } from 'react-router-dom';
import css from './Navigation.module.css';

export default function Navigation() {
  return (
    <div className={css.list}>
      <NavLink exact to="/" className={css.link} activeClassName={css.active}>
        Главная
      </NavLink>

      {/* <NavLink to="/register" className={css.link} activeClassName={css.active}>
        Регистрация
      </NavLink>

      <NavLink to="/login" className={css.link} activeClassName={css.active}>
        Логин
      </NavLink> */}

      <NavLink to="/contacts" className={css.link} activeClassName={css.active}>
        Телефонная книга
      </NavLink>
    </div>
  );
}
