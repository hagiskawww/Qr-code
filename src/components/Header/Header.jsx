import {Link} from "react-router-dom";
import s from './header.module.css'

export const Header = () => {
    return (
        <nav className={s.container}>
            <Link to='/'>Главная</Link>
            <Link to='/generate'>Генерация</Link>
            <Link to='/scan'>Сканирование</Link>
            <Link to='/history'>История</Link>
        </nav>
    );
};