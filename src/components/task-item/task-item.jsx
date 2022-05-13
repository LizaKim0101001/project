import React from "react";
import { AppLinks } from "../../const";
import {Link} from "react-router-dom";
import { tasks } from "../../store";
import { useNavigate } from "react-router-dom";

const Status = (status)=>{
    let clas = "";
    let text = "";
if (status.status === "opened") {
    clas = "status-opened"
    text = "Открыто"
} else if (status.status === "inProgress") {
    clas = "status-inProgress"
    text = "В работе"
}else if (status.status === "testing") {
    clas = "status-inProgress"
    text = "Тестируется"
}else if (status.status === "complete") {
    clas = "status-complete"
    text = "Сделано"
}
    return(
        <td className="task-list_item status">
            <button className={`table-cell status-button ${clas}`}>{text}</button>
        </td>  
    )
}

const Rank = (rank)=>{
    let clas = "";
    let text = "";
if (rank.rank === "low") {
    clas = "proirity-low"
    text = "Низкий"
} else if (rank.rank === "medium") {
    clas = "proirity-medium"
    text = "Средний"
}else if (rank.rank  === "high") {
    clas = "proirity-hight"
    text = "Высокий"
}
    return(
        <td className="task-list_item priority">
            <p className={`table-cell status-button ${clas}`}>{text}</p>
        </td>
    )
}

const TaskItem = ({id, title, type, status, rank, assignedId})=>{
    tasks.getAllUsers()
    const handlerOpen =(e)=>{
        e.preventDefault();
        e.target.classList.toggle("edit-open");
        const parent = e.target.parentElement
        const popup = parent.querySelector(".edit-popup");
        popup.classList.toggle("popup-active")
    }
    let navigate = useNavigate()
    const handlerTask = ()=>{
        navigate(`${AppLinks.TASK}${id}`)
    }
    return(
        <>
        <tr className="task-list_list" onClick={handlerTask}>
            <td className="task-list_item type">
                <p className={`table-cell type-${type}`}></p></td>
            <td className="task-list_item name-task">
                <p className="table-cell">{title}</p></td>
             <td className="task-list_item users">
                <p className="table-cell">user</p></td>
            <Status status = {status}/>
            <Rank rank = {rank}/>
            <td className="task-list_item edit" id={id}>
                <button className="table-cell" onClick={handlerOpen}></button>
                <ul className="popup edit-popup">
                <Link to={`${AppLinks.TASKEDIT}${id}`} className="erase"><li><button className="popup-item">Редактировать</button></li></Link>
                    <li><button className="popup-item popup-item_er">Удалить</button></li>
                    <li><button className="popup-item">На тестирование</button></li>
                    <li><button className="popup-item">Переоткрыть</button></li>
                </ul>
            </td>
        </tr>
        </>
    )
}

export default TaskItem