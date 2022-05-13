import React from "react";
import {  useLocation, useParams} from "react-router-dom";
import { AppLinks } from "../../const";
import { tasks } from "../../store";
import {observer} from "mobx-react";

function TaskListHeader () {
    return(
    <section className="card-header">
        <h3 className="card-header_title">Задачи</h3>
        <button className="button button_primary">Добавить задачу</button>
    </section>
    )
}
function TaskHeaderEdit({edit, status, title,}) {
        let clas = "";
        let text = "";
    if (status === "opened") {
        clas = "status-opened"
        text = "Открыто"
    } else if (status === "inProgress") {
        clas = "status-inProgress"
        text = "В работе"
    }else if (status === "testing") {
        clas = "status-inProgress"
        text = "Тестируется"
    }else if (status === "complete") {
        clas = "status-complete"
        text = "Сделано"
    }
    return(
    <section className="card-header">
        {(edit)
            ?(<>
                <div className="card-wrapper_left">
                    <h3 className="card-header_title">{title}</h3>
                </div>
                <div className="card-wrapper">
                    <button className="button button_primary card-wrapper_btn-primary">Сохранить</button>
                    <button className="button card-wrapper_btn">Отмена</button>
                </div>
                </>)
            : (<>
                <div className="card-wrapper_left">
                    <h3 className="card-header_title">{title}</h3>
                    <p className={`table-cell status-button ${clas}`}>{text}</p>
                </div>
                <div className="card-wrapper">
                    <button className="button">Взять в работу</button>
                    <button className="button button_primary">Редактировать</button>
                    <button className="button button_error">Удалить</button>
                </div>
                </>)
        }
    </section>
    )
}
function UsersHeader() {
    return(
        <section className="card-header">
            <div className="card-wrapper_left">
                <h3 className="card-header_title">g</h3>
            </div>
            <div className="card-wrapper">
                <button className="button button_primary card-wrapper_btn-primary">Добавить задачу</button>
                <button className="button card-wrapper_btn">Редактировать</button>
            </div>
        </section>
    )
}

const CardHeader = observer(({edit}) =>{
    const {id} = useParams()
    const {pathname} = useLocation()
    const {oneTask} = tasks
    const {status, title} = oneTask;

    if (id) {
        return <TaskHeaderEdit edit={edit} status = {status} title = {title}/>
    } else if (pathname === `${AppLinks.TASKLIST}`) {
        return <TaskListHeader/>
    } else if (pathname === `${AppLinks.PROFILE}`) {
        return <UsersHeader/>
    }
})

export default CardHeader