import React from "react";
import {observer} from "mobx-react";

const EditTask = observer(({id})=> {
    return(
        <>
            <section className="task-information">
                <form className="task-about">
                    <ul className="task-about_list">
                        <li className="task-about_item">
                            <p className="task-information_title">Исполнитель</p>
                            <select name="" id="" className="input task-edit_select">
                                <option value="user1">User1</option>
                                <option value="user2">User2</option>
                            </select>
                        </li>
                        <li className="task-about_item">
                            <p className="task-information_title">Тип запроса</p>
                            <select name="" id="" className="input task-edit_select">
                                <option value="task">Задача</option>
                                <option value="error">Ошибка</option>
                            </select>
                        </li>
                        <li className="task-about_item">
                            <p className="task-information_title">Приоритет</p>
                            <select name="" id="" className="input task-edit_select">
                                <option value="hight">Высокий</option>
                                <option value="medium">Средний</option>
                                <option value="low">Низкий</option>
                            </select>
                        </li>
                    </ul>
                </form>
                <p className="task-information_divide"></p>
                <div className="task-description">
                    <p className="task-information_title">Название</p>
                    <input type="text" className="input"/>
                    <p className="task-information_title">Описание</p>
                    <textarea></textarea>
                </div>
                <p className="task-information_divide"></p>
                <div className="task-comment">
            </div>
        </section>
        </>
    )
})
export default EditTask