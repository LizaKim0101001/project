import React from "react";
import {tasks} from "../../store/index.js" 
//import {useState} from "react";

export default function TaskListForm() {
const handlerShow=(e)=>{
    e.preventDefault()
    e.target.parentElement.classList.toggle("show");
}
const form = {
    filter: {
      query: "",
      assignedUsers: [
      ],
      userIds: [
      ],
      type: [
      ],
      status: [
      ],
      rank: [
      ]
    },
    page: 0,
    limit: 0,
  }

const handlerType= (evt)=>{
    if (evt.target.checked) {
        const {id} = evt.target;
        form.filter.type.push(`${id}`)
    } else if (!evt.target.checked) {
        const {id} = evt.target;
        const index = form.filter.type.indexOf(`${id}`)
        form.filter.type.splice(index, 1)
    }
}
const handlerStatus = (evt)=>{
    if (evt.target.checked) {
        const {id} = evt.target;
        form.filter.status.push(`${id}`)
    } else if (!evt.target.checked) {
        const {id} = evt.target;
        const index = form.filter.type.indexOf(`${id}`)
        form.filter.status.splice(index, 1)
    }
}
const handlerRank = (evt)=>{
    if (evt.target.checked) {
        const {id} = evt.target;
        form.filter.rank.push(`${id}`)
    } else if (!evt.target.checked) {
        const {id} = evt.target;
        const index = form.filter.type.indexOf(`${id}`)
        form.filter.rank.splice(index, 1)
    }
}
const handlerQuery = (evt)=>{
    const { value} = evt.target;
    form.filter.query = value
}
const handlerSubmit = (e)=>{
    e.preventDefault()
    tasks.filter = form
    tasks.getFilterTasks(tasks.filter)
}
    return(
        <>
        <section className="task-list">
            <form action="" onSubmit={handlerSubmit} >
                <ul className="task-list_list">
                    <li className="task-list_item type">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            Type
                        </button>
                        <ul className="dropdown_content">
                            <li className="dropdown_item">
                                <input type="checkbox" name="type" id="task" className="dropdown_checkbox" onChange={handlerType}/>
                                <label htmlFor="task" className="dropdown_label">Задача</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="type" id="bug" className="dropdown_checkbox" onChange={handlerType}/>
                                <label htmlFor="bug" className="dropdown_label"> Ошибка</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item name-task">
                        <input className="dropdown_btn" name="query" type="text" placeholder="Название задачи" onChange={handlerQuery}/>
                    </li>
                    <li className="task-list_item users">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            Пользователь
                        </button>
                        <ul className="dropdown_content">
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="user1" className="dropdown_checkbox" />
                                <label htmlFor="user1" className="dropdown_label">User1</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="user2" className="dropdown_checkbox" />
                                <label htmlFor="user2" className="dropdown_label"> User2</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item status">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            Статус
                        </button>
                        <ul className="dropdown_content">
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="opened" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="opened" className="dropdown_label">Открыто</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="inProgress" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="inProgress" className="dropdown_label">В работе</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="testing" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="testing" className="dropdown_label"> Тестируется</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="complete" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="complete" className="dropdown_label"> Сделано</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item priority">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            Приоритет
                        </button>
                        <ul className="dropdown_content">
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="low" className="dropdown_checkbox" onChange={handlerRank}/>
                                <label htmlFor="low" className="dropdown_label">Низкий</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="medium" className="dropdown_checkbox" onChange={handlerRank}/>
                                <label htmlFor="medium" className="dropdown_label">Средний</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="high" className="dropdown_checkbox" onChange={handlerRank}/>
                                <label htmlFor="high" className="dropdown_label"> Высокий</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item edit">
                        <button type="submit" className="button button_primary">Применить</button>
                    </li>
                </ul>
            </form>
        </section>
        </>
    )
}
