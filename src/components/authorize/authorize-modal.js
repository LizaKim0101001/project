import React from "react";
import {useState} from "react";
import { users } from "../../store/users";
import {observer} from "mobx-react";
import { AppLinks } from "../../const";
import { useNavigate } from "react-router-dom";
import _ from "lodash";
const AuthorizeModal= observer(()=> {
    const [form, setForm] = useState({
        login:"",
        password: "",
    })

    const handlerLogin = (evt)=>{
        const {id, value} = evt.target;
        setForm({...form, [id]:value})
    }
    const handlerOpen =(e)=>{
        e.preventDefault();
        const popup = document.querySelector(".popup");
        popup.classList.toggle("popup-authorize-active")
    }
    
    let navigate = useNavigate()
    console.log();
    const handlerSubmit = async (evt)=>{
        await evt.preventDefault()
        if (_.isEqual(form, users.userLoginData)) {
            await users.login(users.userLoginData)
            navigate(`${AppLinks.TASKLIST}`)
        }
        if (!_.isEqual(form, users.userLoginData)) {
            const popup = document.querySelector(".popup");
            popup.classList.toggle("popup-authorize-active")

        }
    }
    return(
        <>
        <section className="authorize">
            <div className="authorize-wrapper">
                <h2 className="authorize_title">Авторизация</h2>
                <form action="" className="authorize_form" onSubmit={handlerSubmit}>
                    <label htmlFor="login" className="label">Логин </label>
                    <input type="text" id="login" className="input" placeholder="username@e.mail" onChange={handlerLogin}/>
                    <label htmlFor="password" className="label">Пароль</label>
                    <input type="password" id="password" className="input" placeholder="********" onChange={handlerLogin}/>
                    <button type="submit" className="button">Вход</button>
                </form>
            </div>
        </section>
        <section className="popup popup-authorize">
                <h3 className="popup-authorize_title">Неправильно введены данные</h3>
                <button className="button" onClick={handlerOpen}>Закрыть окно</button>
        </section>
        </>
    )
})

export default AuthorizeModal