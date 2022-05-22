import React from "react";
import {  useLocation, useParams} from "react-router-dom";
import { AppLinks } from "../../const";
import { tasks } from "../../store/tasks";
import {observer} from "mobx-react";
import { useNavigate } from "react-router-dom";
import { users } from "../../store/users";

function TaskListHeader () {
    let navigate = useNavigate()
    const handlerAdd= ()=>{
        navigate(`${AppLinks.TASKADD}`)
    }
    return(
    <section className="card-header">
        <h3 className="card-header_title">Задачи</h3>
        <button className="button button_primary" onClick={handlerAdd}>Добавить задачу</button>
    </section>
    )
}

const TaskHeader = observer(({status, title, id})=> {
    let clas = "";
    let text = "";
    if (status === "opened") {
        clas = "table-status-opened"
        text = "Открыто"
    } else if (status === "inProgress") {
        clas = "table-status-inProgress"
        text = "В работе"
    }else if (status === "testing") {
        clas = "table-status-inProgress"
        text = "Тестируется"
    }else if (status === "complete") {
        clas = "table-status-complete"
        text = "Сделано"
    }
    const statusEnum = {
        opened:[{status:"inProgress", text:"Взять в работу"}, {status:"complete", text:"Сделано"}], 
        inProgress:[{status:"opened", text:"Переоткрыть"}, {status:"testing", text:"На тестировании"}, {status:"complete", text:"Сделано"}],
        testing:[{status:"opened", text:"Переоткрыть"}, {status:"complete", text:"Сделано"}],
        complete:[{status:"opened", text:"Переоткрыть"}, {status:"complete", text:"Сделано"}],
    }
    const statusArray = statusEnum[status]

    async function handlerStatusChange(e) {
        e.preventDefault()
        await tasks.shangeStatus(id, e.target.id)
        await tasks.oneTask(id)
    }
    async function handlerDeleteTask(){
        await tasks.deleteTask(id)
        await tasks.allTasks()
    }
    let navigate = useNavigate()
    const handlerEdit= ()=>{
        navigate(`${AppLinks.TASKEDIT}${id}`)
    }
    return(
        <section className="card-header">
                <div className="card-wrapper_left">
                    <h3 className="card-header_title">{title}</h3>
                    <p className={`table-cell table-status-button ${clas}`}>{text}</p>
                </div>
                <div className="card-wrapper">
                    {statusArray && 
                    statusArray.map(statusArray=> <button id={statusArray.status} onClick={handlerStatusChange}  className="button">{statusArray.text}</button>)
                    }
                    <button className="button button_primary" onClick={handlerEdit}>Редактировать</button>
                    <button className="button button_error" onClick={handlerDeleteTask}>Удалить</button>
                </div>
        </section>
    )
})
const TaskHeaderEdit = ({pathname, id})=> {
       
    
    let editCreate = "Создание"
    if (id) {
     editCreate = "Редактировать"
    }
    async function handlerSaveEdit(){
        await tasks.createEditTasks(tasks.taskCreateEdit)
        console.log(tasks.taskCreateEdit);
    }
    return(
    <section className="card-header">
        <div className="card-wrapper_left">
            <h3 className="card-header_title">{editCreate}</h3>
        </div>
        <div className="card-wrapper">
            <button className="button button_primary card-wrapper_btn-primary" onClick={handlerSaveEdit}>Сохранить</button>
            <button className="button card-wrapper_btn">Отмена</button>
        </div>
    </section>
    )
}
const UsersHeader = observer(() =>{
    let userLogin
    if (users.userData.id !== undefined && users.oneUser.id === users.userData.id) {
        userLogin = true
    } else {
        userLogin = false
    }
    const handlerOpenModal = (e)=>{
        e.preventDefault()
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    let navigate = useNavigate()
    const handlerAdd= ()=>{
        users.userForAssignId = users.oneUser
        navigate(`${AppLinks.TASKADD}`)
    }
    return(
        <section className="card-header">
            <div className="card-wrapper_left">
                <h3 className="card-header_title">{users.oneUser.username}</h3>
            </div>
            <div className="card-wrapper">
                <button className="button" onClick={handlerAdd}>Добавить задачу</button>
                {(userLogin && <button className="button" onClick={handlerOpenModal}>Редактировать</button>)}
            </div>
        </section>
    )
})

const CardHeader = observer(({edit}) =>{
    const {id} = useParams()
    const {pathname} = useLocation()
    const {status, title} = tasks.task;
    
    if (pathname === AppLinks.TASKLIST) {
        return <TaskListHeader/>
    } 
    if (pathname !== AppLinks.TASKLIST && edit === undefined) {
        return <UsersHeader/>
        
    }
    if (edit) {
        return <TaskHeaderEdit edit={edit} id={id} pathname={pathname}/>
    }
    if (!edit) {
        return <TaskHeader id={id} status = {status} title={title}/>
    }
})

export default CardHeader