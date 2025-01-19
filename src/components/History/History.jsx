import {Link} from "react-router-dom";
import s from './History.module.css'

export const History = () => {

    return (
        <div className={s.history}>
            <Link to='/history-generate'>История генераций</Link>
            <Link to='/history-scann'>История сканирование</Link>
        </div>
    )
}