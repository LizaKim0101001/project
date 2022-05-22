import React from "react";
import { tasks } from "../../store/tasks";
import { users } from "../../store/users";
import Pagination from "../pagination/pagination";
import TaskItem from "../task-item/task-item";
import {observer} from "mobx-react";

const ProfileBoard = observer(()=> {
    
    // для заполнения полей о пользователе
    const {about, id, photoUrl, username} = users.oneUser
    let aboutArray
    if (about === null || about === undefined) {
        aboutArray = []
    } else{
        aboutArray = about.split(" ")
    }
    const handleEditProfile = (evt)=>{
        const {id, value} = evt.target
        users.editProfile[id] = value
    }
    //для заполнения полей задач пользователя
    const {filterData} = tasks


    //управления модальным окном
    const handlerCloseModal = (e)=>{
        e.preventDefault()
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
    }
    function examination() {
        if (users.editProfile.about === "") {
            users.editProfile.about = users.userData.about
        }
        if (users.editProfile.photoUrl === "") {
            users.editProfile.photoUrl = users.userData.photoUrl
        }
        if (users.editProfile.login === "") {
            users.editProfile.login = users.userData.login
        }
    }
    async function editProfile (e){
        e.preventDefault()
        const modal = document.querySelector(".notion-work")
        modal.classList.toggle("notion-work_show");
        users.editProfile.id = users.userData.id
        users.editProfile.login = users.userData.login
        users.editProfile.password = "123"
        await examination();
        await users.editUsers(users.editProfile);
        await users.getOneUserData(id)
        await users.users()
    }
    return(
        <>
        <section className="profile">
            <div className="task-about">
                <img src={photoUrl} alt="" className="profile_avatar" />
                <ul className="profile_user-about">
                    <li className="profile_title">
                        О себе
                    </li>
                    {(aboutArray &&
                        aboutArray.map(aboutArray=> <li key={aboutArray} className="profile_text">{aboutArray}</li>))}
                </ul>
            </div>
            <p className="task-information_divide"></p>
            <div className="profile-tasks">
                <p className="profile_title">Задачи</p>
                <table className="table">
                    <tbody>
                    {(filterData.data &&
                        filterData.data.map(filterData=> <TaskItem id={filterData.id} title={filterData.title} status={filterData.status} type={filterData.type} rank={filterData.rank} assignedId={filterData.assignedId}/>)
                    )} 
                    </tbody>
                </table>
                <Pagination></Pagination>
            </div>
            </section>
            <section className="notion-work">
            <div className="notion-work_wrapper">
                <h3 className="notion-work_title">Редактирование пользователя</h3>
                <form action="" className="notion-work_form">
                    <ul className="notion-work_list">
                        <li className="notion-work_item">
                            <label className="task-information_title" htmlFor="username">Имя пользователя</label>
                            <input className="notion-work_input input" id="username" type="text" defaultValue={username} onChange={handleEditProfile}/>
                        </li>
                        <li className="notion-work_item">
                            <label htmlFor="photoUrl" className="task-information_title">URL фотографии</label>
                            <input id="photoUrl" className="notion-work_input input" alt="avatar" type="text" placeholder="URL фотографии" onChange={handleEditProfile}/>
                        </li>
                        <li className="notion-work_item">
                            <label htmlFor="about" className="task-information_title">Комментарий</label>
                            <textarea id="about" className="input task-comment_input" defaultValue={about} onChange={handleEditProfile}></textarea>
                        </li>
                    </ul>
                </form>
                <div className="buttons-wrapper">
                    <button type="submit" className="button button_primary notion-work_button" onClick={editProfile}>Добавить</button>
                    <button type="reset" onClick={handlerCloseModal} className="button notion-work_button">Отмена</button>
                </div>
            </div>
            </section>

        
        </>
    );
})

export default  ProfileBoard