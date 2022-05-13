import React from "react";
import {useState} from "react";
import { tasks } from "../../store/index";
import {observer} from "mobx-react";
import {Link} from "react-router-dom";
import { AppLinks } from "../../const";

const AuthorizeModal= observer(()=> {
    const [form, setForm] = useState({
        login:"",
        password: "",
    })

    const handlerLogin = (evt)=>{
        const {id, value} = evt.target;
        setForm({...form, [id]:value})
    }

    const handlerSubmit = (evt)=>{
        evt.preventDefault()
        tasks.postLogin = form
        console.log(tasks.postLogin);
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
                    <Link to={AppLinks.TASKLIST}><button type="submit" className="button">Вход</button></Link>
                </form>
            </div>
        </section>
        </>
    )
})

export default AuthorizeModal