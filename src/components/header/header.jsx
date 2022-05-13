import React from "react";
import { useLocation} from "react-router-dom";
import {AppLinks} from "../../const.js";
import { tasks } from "../../store/index.js";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";

 const Header = observer(()=>{
    const {pathname} = useLocation();
    const handlerPopupActive=(e)=>{
        e.preventDefault();
        const popup = document.querySelector(".popup");
        popup.classList.toggle("popup-active");
    }
    const {userData} = tasks
    const {username} = userData
    return (
        <header className="header">
            {(pathname === AppLinks.AUTHORIZE)
            ? (<div className="wrapper-header">
                <Link to={AppLinks.AUTHORIZE}><p className="logo" alt="Логотип"/></Link>
            </div>)
            : (<div className="wrapper-header">
                <Link to={AppLinks.AUTHORIZE}><p className="logo" alt="Логотип"/></Link>
                <ul className="navigation">
                    <Link to={AppLinks.TASKLIST} className="link"><li className="navigation_item active">Задачи</li></Link>
                    <Link to={AppLinks.USERS} className="link"><li className="navigation_item">Пользователи</li></Link>
                </ul>
                <div className="user-profile">
                    <button className="user-profile" onClick={handlerPopupActive}>
                    <p className="user-profile_name">{username}</p>
                    <p className="user-profile_img" alt="аватар пользователя" />
                    </button>
                    <ul className="popup">
                        <Link to={AppLinks.PROFILE}><li><button className="popup-item">Просмотреть профиль</button></li></Link>
                        <li><button className="popup-item popup-item_er">Выйти из системы</button></li>
                    </ul>
                </div>
            </div>)}
        </header>
    )
})

export default Header