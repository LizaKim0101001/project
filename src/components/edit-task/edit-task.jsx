import React from "react";
import {observer} from "mobx-react";
import { tasks } from "../../store/tasks";
import { useParams} from "react-router-dom";
import { users } from "../../store/users";

const EditTask = observer(()=> {

    let title = ""
    let description = ""
    const {id} = useParams()
    const {allUsers} = users
    if (id) {
        tasks.taskCreateEdit.id = id
        tasks.taskCreateEdit.userId = tasks.task.userId
        title = tasks.task.title
        description = tasks.task.description
    } 
    if (id === undefined) {
        delete tasks.taskCreateEdit.id
        tasks.taskCreateEdit.userId = users.userData.id 
    }


    const openSelect = (e)=>{
        const options = e.target.childNodes
        e.target.classList.toggle("select-open")
        for (let i = 1; i < options.length; i++) {
            const element = options[i];
            element.classList.toggle("option-show")
        }
    }
    const openSelectByOption = (e)=>{
        const parentSelect = e.target.parentElement
        parentSelect.classList.toggle("select-open")
        const options = parentSelect.childNodes
        for (let i = 1; i < options.length; i++) {
            const element = options[i];
            element.classList.toggle("option-show")
        }
    }
    

   
    let defaultOptionText = "Выберите пользователя"

    if (users.oneUser !== undefined || users.oneUser !== null || users.oneUser !== []) {
        tasks.taskCreateEdit.assignedId = users.oneUser.assignedId
        defaultOptionText = users.oneUser.username
    }
    if (!users.oneUser.username) {
        defaultOptionText = "Выберите пользователя"
    } 

    const handlerOption = (e)=>{
        const parentSelect = e.target.parentElement
        parentSelect.classList.toggle("select-open")
        const options = parentSelect.childNodes
        for (let i = 1; i < options.length; i++) {
            const element = options[i];
            element.classList.toggle("option-show")
        }
        const defaultOption = parentSelect.querySelector(".select-default")
        defaultOption.textContent = e.target.textContent

        if (parentSelect.id === 'type') {
            tasks.taskCreateEdit.type = e.target.id
        } 
        if (parentSelect.id === 'rank') {
            tasks.taskCreateEdit.rank = e.target.id
        }
        if (parentSelect.id === 'assignedId') {
            tasks.taskCreateEdit.assignedId = e.target.id
        }
    }
    const handlerInput = (e)=>{
        const {id, value} = e.target
        if (id === 'title') {
            tasks.taskCreateEdit.title = value
        }
        if (id === 'description') {
            tasks.taskCreateEdit.description = value
        }
    }
    return(
        <>
            <section className="task-information">
                <form className="task-about">
                    <ul className="task-about_list">
                        <li className="task-about_item">
                            <p className="task-information_title">Исполнитель</p>
                            <div name="executor" id="assignedId" className="select " onClick={openSelect}>
                                <p className="select-default select-text" onClick={openSelectByOption}>{defaultOptionText}</p>
                                {(allUsers.map(allUsers=><p className="select-option select-text" {...allUsers} key={allUsers.id} id={allUsers.id} onClick={handlerOption}>{allUsers.username}</p>))}
                            </div>
                        </li>
                        <li className="task-about_item">
                            <p className="task-information_title">Тип запроса</p>
                            <div name="type" id="type" className="select " onClick={openSelect}>
                                <p className="select-default select-text" onClick={openSelectByOption}>Выберите тип</p>
                                <p className="select-option select-text" id="task" value="task" onClick={handlerOption}>Задача</p>
                                <p className="select-option select-text" id="error" value="error" onClick={handlerOption}>Ошибка</p>
                            </div>
                        </li>
                        <li className="task-about_item">
                            <p className="task-information_title">Приоритет</p>
                            <div name="rank" id="rank" className="select " onClick={openSelect}>
                                <p className="select-default select-text" onClick={openSelectByOption}>Выберите приоритет</p>
                                <p className="select-option select-text" id="high" onClick={handlerOption}>Высокий</p>
                                <p className="select-option select-text" id="medium" onClick={handlerOption}>Средний</p>
                                <p className="select-option select-text" id="low" onClick={handlerOption}>Низкий</p>

                            </div>
                        </li>
                    </ul>
                </form>
                <p className="task-information_divide"></p>
                <div className="task-description">
                    <p className="task-information_title">Название</p>
                    <input type="text" id="title" className="input task-edit_input" defaultValue={title} onChange={handlerInput}/>
                    <p className="task-information_title">Описание</p>
                    <textarea id="description" className="input task-edit_textarea" defaultValue={description} onChange={handlerInput}></textarea>
                </div>
                <p className="task-information_divide"></p>
                <div className="task-comment">
            </div>
        </section>
        </>
    )
})
export default EditTask
