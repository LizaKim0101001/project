import React from "react";
import { tasks } from "../../store";


const TaskDescription = () =>{
    const handlerShow=(e)=>{
        e.preventDefault()
        e.target.parentElement.classList.toggle("show");
    }
    const handlerCloseModal = (e)=>{
        e.preventDefault()
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    const handlerOpenModal =()=>{
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    let text = "Выберите единицу измерения"
    const handelChange = (e)=>{
        const id = e.target.id;
        
        if (id === "minute") {
            text = "Минут";
        } else if (id === "hour") {
            text = "Часов";
        } else if (id === "day") {
            text = "Дней";
        }
        document.querySelector(".dropdown_btn").textContent=text;
    }
    const {rank, dateOfCreation, dateOfUpdate, title, type, userId, assignedId} = tasks.oneTask
    const author = tasks.allUsers.find(user => user.id === userId).username
    const executor = tasks.allUsers.find(user => user.id === assignedId).username
    console.log(dateOfCreation, dateOfUpdate, title);
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
                        <p className="task-information_text">01.09.2768</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Дата изменения</p>
                        <p className="task-information_text">0108 85</p>
                    </li>
                    <li className="task-about_item">
                        <p className="task-information_title">Затрачено времени</p>
                        <p className="task-information_text">0 минут 0 секунд</p>
                    </li>
                </ul>
                <button className="task-about_button button button_primary" onClick={handlerOpenModal}>Сделать запись о работе</button>
            </div>
            <p className="task-information_divide"></p>
            <div className="task-description">
                <p className="task-information_title">Описание</p>
                <p className="task-information_text">
                    Какой-то текст задачи, например, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean imperdiet consectetur dolor, nec consectetur nisl mattis ut. Proin ac sapien at elit lacinia semper. Nullam vestibulum rutrum efficitur. Sed et egestas ante, id ullamcorper ante. Maecenas porta sem ultrices libero tempus, eu laoreet turpis bibendum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed laoreet est et nisi tristique, ut hendrerit tellus pulvinar. Proin eget elit a mauris convallis molestie nec vel nisi. Etiam accumsan porta velit et convallis. Maecenas euismod scelerisque lectus, non varius velit condimentum non. Vestibulum luctus risus et metus volutpat, at sodales massa gravida.
                </p>
            </div>
            <p className="task-information_divide"></p>
            <div className="task-comment">
                <form action="" className="task-comment-form">
                    <label htmlFor="comment" className="task-information_title">Комментарии(1)</label>
                    <textarea type="text" id="comment" className="input task-comment_input" placeholder="Текст комментария" />
                    <button type="submit" className="button button_success task-comment_button">Добавить комментарий</button>
                </form>
                <ul className="task-comment_list">
                    <li className="task-comment_item">
                        <p className="task-information_title">Шерлок (10190289)</p>
                        <p className="task-information_text">фыфыфыф</p>
                    </li>
                    <li className="task-comment_item">
                        <p className="task-information_title">Ватсон (87282)</p>
                        <p className="task-information_text">самый</p>
                    </li>
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
                            <input className="notion-work_input input" type="text" />
                        </li>
                        <li className="notion-work_item">
                            <button className="dropdown_btn" onClick={handlerShow}>
                               {text}
                            </button>
                                <ul className="dropdown_content">
                                    <li  className="dropdown_item">
                                        <label htmlFor="day" className="notion-work_label">Дней</label>
                                        <input type="checkbox" name="" id="day" className="visually-hidden" onChange={handelChange}/>
                                    </li>
                                    <li  className="dropdown_item">
                                        <label htmlFor="hour" className="notion-work_label"> Часов</label>
                                        <input type="checkbox" name="" id="hour" className="visually-hidden" onChange={handelChange}/>
                                    </li>
                                    <li  className="dropdown_item">
                                        <label htmlFor="minute" className="notion-work_label">Минут</label>
                                        <input type="checkbox" name="" id="minute" className="visually-hidden" onChange={handelChange}/>
                                    </li>
                                </ul>
                        </li>
                        <li className="notion-work_item">
                            <label htmlFor="work-comment" className="task-information_title">Комментарий</label>
                            <textarea id="work-comment" className="input task-comment_input" placeholder="placehoder"></textarea>
                        </li>
                    </ul>
                </form>
                <div className="buttons-wrapper">
                    <button type="submit" className="button button_primary notion-work_button">Добавить</button>
                    <button type="reset" onClick={handlerCloseModal} className="button notion-work_button">Отмена</button>
                </div>
            </div>
        </section>
        </>
    )
};

export default TaskDescription
    