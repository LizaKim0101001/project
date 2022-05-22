import React from "react";
import { AppLinks } from "../../const";
import { useNavigate } from "react-router-dom";
import { users } from "../../store/users";
import { tasks } from "../../store/tasks";

const Status = (status)=>{
    let clas = "";
    let text = "";
if (status.status === "opened") {
    clas = "table-status-opened"
    text = "Открыто"
} else if (status.status === "inProgress") {
    clas = "table-status-inProgress"
    text = "В работе"
}else if (status.status === "testing") {
    clas = "table-status-inProgress"
    text = "Тестируется"
}else if (status.status === "complete") {
    clas = "table-status-complete"
    text = "Сделано"
}
    return(
        <td className="table_item table-status">
            <button className={`table-cell table-status-button ${clas}`}>{text}</button>
        </td>  
    )
}

const Rank = (rank)=>{
    let clas = "";
    let text = "";
if (rank.rank === "low") {
    clas = "table-proirity-low"
    text = "Низкий"
} else if (rank.rank === "medium") {
    clas = "table-proirity-medium"
    text = "Средний"
}else if (rank.rank  === "high") {
    clas = "table-proirity-hight"
    text = "Высокий"
}
    return(
        <td className="table_item table-priority">
            <p className={`table-cell status-button ${clas}`}>{text}</p>
        </td>
    )
}

const TaskItem = ({id, title, type, status, rank, assignedId})=>{

    const getUserById = (number)=>{
        let text
        if (users.allUsers.find(user => user.id === number) === undefined) {
            return text = "Не задан"
        } else {
            text = users.allUsers.find(user => user.id === number).username
            return text
        }
    }
    const authorTask = getUserById(assignedId)
    let navigate = useNavigate()
    function handlerTask (){
        navigate(`${AppLinks.TASK}${id}`)
    }
    function handlerEditTask (){
        navigate(`${AppLinks.TASKEDIT}${id}`)
    }
    async function handlerDeleteTask(){
        await tasks.deleteTask(id)
        await tasks.allTasks()
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
        await tasks.filterTasks(tasks.taskFilter)
    }
    const handlerOpen =(e)=>{
        e.preventDefault();
        e.target.classList.toggle("table-edit-open");
        const parent = e.target.parentElement
        const popup = parent.querySelector(".popup");
        popup.classList.toggle("popup-active")
    }
    return(
        <>
        <tr className="table_list" >
            <td className="table_item table-type" onClick={handlerTask}>
                <p className={`table-cell type-${type}`}></p></td>
            <td className="table_item table-name-task" onClick={handlerTask}>
                <p className="table-cell">{title}</p></td>
             <td className="table_item table-users" onClick={handlerTask}>
                <p className="table-cell">{authorTask}</p></td>
            <Status status = {status} onClick={handlerTask}/>
            <Rank rank = {rank} onClick={handlerTask}/>
            <td className="table_item table-edit" id={id}>
                <button className="table-cell" onClick={handlerOpen}></button>
                <ul className="popup">
                    <li className="popup-item"><button className="popup-btn" onClick={handlerEditTask}>Редактировать</button></li>
                    <li className="popup-item"><button className="popup-btn popup-btn_er" onClick={handlerDeleteTask}>Удалить</button></li>
                    {(statusArray.map(statusArray=> <li className="popup-item"><button id={statusArray.status} onClick={handlerStatusChange}  className="popup-btn">{statusArray.text}</button></li>))}
                </ul>
            </td>
        </tr>
        </>
    )
}

export default TaskItem