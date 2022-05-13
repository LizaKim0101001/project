import React from "react";
import Pagination from "../pagination/pagination";

export default function ProfileBoard() {

    const handlerCloseModal = (e)=>{
        e.preventDefault()
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    return(
        <>
        <section className="profile">
            <div className="task-about">
                <img src="" alt="" className="profile_avatar" />
                <ul className="profile_user-about">
                    <li className="profile_title">
                        куфд
                    </li>
                    <li className="profile_text">
                        куфд
                    </li>
                    <li className="profile_text">
                        куфд
                    </li>
                    <li className="profile_text">
                        куфд
                    </li>
                </ul>
            </div>
            <p className="task-information_divide"></p>
            <div className="profile-tasks">
                <p className="profile_title">Задачи</p>
                <table className="table">
                    <tr className="task-list_list">
                        <td className="task-list_item type">
                            <p className="table-cell type-error"></p></td>
                        <td className="task-list_item name-task">
                            <p className="table-cell">2</p></td>
                        <td className="task-list_item status">
                            <button className="table-cell status-button status-error">Открыто</button></td>
                        <td className="task-list_item priority">
                            <p className="table-cell proirity-hight">Высокий</p></td>
                    </tr>
                    <tr className="task-list_list">
                        <td className="task-list_item type">
                            <p className="table-cell type-error"></p></td>
                        <td className="task-list_item name-task">
                            <p className="table-cell">2</p></td>
                        <td className="task-list_item status">
                            <button className="table-cell status-button status-error">Открыто</button></td>
                        <td className="task-list_item priority">
                            <p className="table-cell proirity-hight">Высокий</p></td>
                    </tr>
                </table>
                <Pagination></Pagination>
            </div>
            <section className="notion-work notion-work_show">
            <div className="notion-work_wrapper">
                <h3 className="notion-work_title">Редактирование пользователя</h3>
                <form action="" className="notion-work_form">
                    <ul className="notion-work_list">
                        <li className="notion-work_item">
                            <label className="task-information_title" htmlFor="new-name">Имя пользователя</label>
                            <input className="notion-work_input input" id="new-name" type="text" placeholder="Введите имя"/>
                        </li>
                        <li className="notion-work_item">
                            <label htmlFor="new-avatar" className="task-information_title">URL фотографии</label>
                            <input id="new-avatar" className="notion-work_input input" alt="avatar" type="text" placeholder="URL фотографии"/>
                        </li>
                        <li className="notion-work_item">
                            <label htmlFor="about-me" className="task-information_title">Комментарий</label>
                            <textarea id="about-me" className="input task-comment_input" placeholder="placehoder"></textarea>
                        </li>
                    </ul>
                </form>
                <div className="buttons-wrapper">
                    <button type="submit" className="button button_primary notion-work_button">Добавить</button>
                    <button type="reset" onClick={handlerCloseModal} className="button notion-work_button">Отмена</button>
                </div>
            </div>
        </section>

        </section>
        </>
    );
}