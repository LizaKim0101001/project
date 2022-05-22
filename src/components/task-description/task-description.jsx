import React from "react";
import moment from "moment";
import {tasks} from "../../store/tasks"
import { observer} from "mobx-react";
import { comments } from "../../store/comment";
import { users } from "../../store/users";

function Comment ({text, userId, authorCommentId, commentId, id}){
    const getUserById= (number)=>{
        let text
        if (users.allUsers.find(user => user.id === number) === undefined) {
            return text = "Не задан"
        } else {
            text = users.allUsers.find(user => user.id === number).username
            return text
        }
    }
    
    async function handelerDeleteComment (){
        await comments.deleteComment(commentId)
        await comments.comments(id)
    }
    const authorComment = getUserById(userId)
    return(
        <>
            <li className="task-comment_item">
                <div>
                    <p className="task-information_title">{authorComment}</p>
                    <p className="task-information_text">{text}</p>
                </div>
                {(userId === authorCommentId)
                    && <p className="task-information_text task-information_delete"  onClick={handelerDeleteComment}>Удалить</p>
                }
            </li>
        </>
    )
}

const TaskDescription = observer(({id}) =>{
    const {rank, description, dateOfCreation, dateOfUpdate, timeInMinutes, type, userId, assignedId} = tasks.task
    const getUserById= (number)=>{
        let text
        if (users.allUsers.find(user => user.id === number) === undefined) {
            return text = "Не задан"
        } else {
            text = users.allUsers.find(user => user.id === number).username
            return text
        }
    }
    let author = getUserById(userId)
    let executor = getUserById(assignedId)


    const handlerCloseModal = (e)=>{
        e.preventDefault()
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    const handlerOpenModal =()=>{
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    
    let taskType = ""
    if (type === 'task') {
        taskType = "Задача"
    } else if (type === 'bug') {
        taskType = "Ошибка"
    }
    let rankTask = ""
    if (rank === "high") {
        rankTask = "Высокий"
    } else if (rank === "medium") {
        rankTask = "Средний"
    } else if (rank === "low") {
        rankTask = "Низкий"
    }
    const dateCreation = moment(dateOfCreation).format("DD.MM.YYYY HH:mm")
    const dateUpdates = moment(dateOfUpdate).format("DD.MM.YYYY HH:mm")
    
    const {allComments} = comments
    const totalComment = allComments.length
    const authorCommentId = users.userData.id

    const handleAddComment = (evt)=>{
        const {value} = evt.target
        comments.comentData.text = value
    }
    async function handleSubmit (e){
        e.preventDefault();
        comments.comentData.taskId = id
        comments.comentData.userId = authorCommentId
        comments.comentData.dateOfCreation = dateOfCreation
        await comments.createEditComment(comments.comentData)
        await comments.comments(id)
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
    let unit
    let time
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
        unit = e.target.id
    }
    const handlerCommentWork = (e)=>{
        tasks.workTime.comment = e.target.value
    }
    const handlerTimeWork = (e)=>{
        time = e.target.value
    }
        let textMin
        let min = timeInMinutes % 60 | 0
        let textHours
        let hours = timeInMinutes/60 | 0
        let textDays
        let days = 0
        if (hours > 24){
            days = Math.floor(hours/24)
            hours = hours -24
        }
        if (min === 1) {
            textMin = "минута"
        } else {
            textMin = "минут"
        }
        if (hours === 1) {
            textHours = "час"
        }
        if (hours >= 2 && hours <5) {
            textHours = "часа"
        }
        if (hours >= 5 || hours === 0){
            textHours = "часов"
        }
        if (days === 1) {
            textDays = "день"
        } 
        if (days >= 2 && days <5) {
            textDays = "дня"
        }
        if (days >= 5 || days === 0){
            textDays = "дней"
        }
    
    async function handlerWorkTime (e){
        e.preventDefault()
        let allTime
        if (unit === "hour") {
            allTime = time * 60
        }
        if (unit === "day") {
            allTime = time * 60 * 24

        }
        if (unit === "minute") {
            allTime = time
        }
        tasks.workTime.timeInMinutes = allTime
        tasks.workTime.currentUser = authorCommentId
        console.log(tasks.workTime);
        await tasks.workTimeTask(id, tasks.workTime)
        await tasks.oneTask(id)
    }
    return(
        <>
        <section className="task-information">
            <div className="task-about">
                <ul className="task-about_list">
                    <li className="task-about_item">
                        <p className="task-information_title">Исполнитель</p>
                        <p className="task-information_text">{executor}</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Автор задачи</p>
                        <p className="task-information_text">{author}</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Тип запроса</p>
                        <p className="task-information_text">{taskType}</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Приоритет</p>
                        <p className="task-information_text">{rankTask}</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Дата создания</p>
                        <p className="task-information_text">{dateCreation}</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Дата изменения</p>
                        <p className="task-information_text">{dateUpdates}</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Затрачено времени</p>
                        <p className="task-information_text">{`${days} ${textDays}, ${hours} ${textHours}, ${min} ${textMin}`}</p>
                    </li>
                </ul>
                <button className="task-about_button button button_primary" onClick={handlerOpenModal}>Сделать запись о работе</button>
            </div>
            <div className="task-description">
                <p className="task-information_title">Описание</p>
                <p className="task-information_text">
                {description}
                </p>
            </div>
            <div className="task-comment">
                <form action="" className="task-comment-form" onSubmit={handleSubmit}>
                    <label htmlFor="comment" className="task-information_title">Комментарии({totalComment})</label>
                    <textarea type="text" id="comment" name ="text" className="input task-comment_input" onChange={handleAddComment} placeholder="Текст комментария" />
                    <button type="submit" className="button button_success task-comment_button">Добавить комментарий</button>
                </form>
                <ul className="task-comment_list">
                    {allComments.map(allComments =><Comment {...allComments} id={id} commentId={allComments.id} authorCommentId={authorCommentId} key={allComments.id} text={allComments.text} userId={allComments.userId}/>)}
                </ul>
            </div>
            
        </section>
        <section className="notion-work">
            <div className="notion-work_wrapper">
                <h3 className="notion-work_title">Запись о работе</h3>
                <form action="" className="notion-work_form">
                    <ul className="notion-work_list">
                        <li className="notion-work_item">
                            <label className="task-information_title" htmlFor="time">Затраченное время</label>
                            <input className="notion-work_input input" type="text" onChange={handlerTimeWork}/>
                        </li>
                        <li className="task-about_item">
                            <p className="task-information_title">Единица измерения</p>
                            <div name="time" id="time" className="select " onClick={openSelect}>
                                <p className="select-default select-text" onClick={openSelectByOption}>Выберите единицу измерения</p>
                                <p className="select-option select-text" id="day" onClick={handlerOption}>Дни</p>
                                <p className="select-option select-text" id="hour" onClick={handlerOption}>Часы</p>
                                <p className="select-option select-text" id="minute" onClick={handlerOption}>Минуты</p>
                            </div>
                        </li>
                        <li className="notion-work_item">
                            <label htmlFor="work-comment" className="task-information_title">Комментарий</label>
                            <textarea id="work-comment" className="input task-comment_input" placeholder="placehoder" onChange={handlerCommentWork}></textarea>
                        </li>
                    </ul>
                </form>
                <div className="buttons-wrapper">
                    <button type="submit" className="button button_primary notion-work_button" onClick={handlerWorkTime}>Добавить</button>
                    <button type="reset" onClick={handlerCloseModal} className="button notion-work_button">Отмена</button>
                </div>
            </div>
        </section>
        </>
    )
});

export default TaskDescription
