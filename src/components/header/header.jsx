import React from "react";
import { useLocation, useParams} from "react-router-dom";
import {AppLinks} from "../../const.js";
import { users} from "../../store/users";
import {Link} from "react-router-dom";
import {observer} from "mobx-react";
import { useNavigate } from "react-router-dom";
//import { tasks } from "../../store/tasks.js";

 const Header = observer(()=>{
    const {id} = useParams()
    const {pathname} = useLocation();
    const handlerPopupActive=(e)=>{
        e.preventDefault();
        const popup = document.querySelector(".popup");
        popup.classList.toggle("popup-active");
    }
    const navigate = useNavigate()
    const handlerClick = ()=>{

        navigate(`${AppLinks.TASKLIST}`)
    }
    let username = ""
    let photoUrl = ""
    let userId = ""
    if (users.userData !== undefined) {
        username = users.userData.username
        photoUrl  = users.userData.photoUrl
        userId = users.userData.id
    } 
    const handlerLogout= ()=>{
        users.userLogin = false
    }
    return (
        <header className="header">
            {(pathname === AppLinks.AUTHORIZE)
            ? (<div className="wrapper-header">
                <Link to={AppLinks.AUTHORIZE}><p className="logo" alt="Логотип"/></Link>
            </div>)
            : (<div className="wrapper-header">
                <Link to={AppLinks.AUTHORIZE}><p className="logo" alt="Логотип"/></Link>
                <ul className="navigation">
                   <li onClick={handlerClick} className={`navigation_item ${(pathname === AppLinks.TASKLIST || pathname === `${AppLinks.TASK}${id}` || pathname === `${AppLinks.TASKEDIT }${id}` || pathname === AppLinks.TASKADD) && 'active'}`}>Задачи</li>
                    <Link to={AppLinks.USERS} className="link"><li className={`navigation_item ${(pathname === `${AppLinks.PROFILE}${id}` || pathname === AppLinks.USERS) && 'active'}`}>Пользователи</li></Link>
                </ul>
                <div className="user-profile">
                    {(users.userData &&
                        <>
                        <button className="user-profile" onClick={handlerPopupActive}>
                        <p className="user-profile_name">{username}</p>
                        <img src={photoUrl} className="user-profile_img" alt="аватар пользователя" />
                        </button>
                        <ul className="popup popup-header">
                            <Link to={`${AppLinks.PROFILE}${userId}`} className="erase"><li className="popup-header-item"><button className="popup-btn">Просмотреть профиль</button></li></Link>
                            <li className="popup-header-item"><button className="popup-btn popup-btn_er" onClick={handlerLogout}>Выйти из системы</button></li>
                        </ul>
                        </>)}
                </div>
            </div>)}
        </header>
    )
})

export default Header