import { observer } from "mobx-react-lite";
import React from "react";
import {tasks} from "../../store/tasks";
import { users } from "../../store/users.js";
//import {useState} from "react";

const TaskListForm = observer(()=> {

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
    console.log(form);
    tasks.taskFilter = form
    tasks.filterTasks(tasks.taskFilter)
}
const handlerUser = (e)=>{
    const {id} = e.target
    form.filter.assignedUsers.push(`${id}`)
}
const {allUsers} = users
    return(
        <>
        <section className="task-list">
            <form action="" onSubmit={handlerSubmit} className="form-task-list">
                <ul className="task-list_list">
                    <li className="task-list_item type">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            Type
                        </button>
                        <ul className="dropdown_content">
                            <li className="dropdown_item">
                                <input type="checkbox" name="type" id="task" className="dropdown_checkbox" onChange={handlerType}/>
                                <label htmlFor="task" className="dropdown_label">????????????</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="type" id="bug" className="dropdown_checkbox" onChange={handlerType}/>
                                <label htmlFor="bug" className="dropdown_label"> ????????????</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item name-task">
                        <input className="dropdown_btn" name="query" type="text" placeholder="???????????????? ????????????" onChange={handlerQuery}/>
                    </li>
                    <li className="task-list_item users">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            ????????????????????????
                        </button>
                        <ul className="dropdown_content">
                            {(allUsers.map(allUsers=><li  className="dropdown_item">
                                <input type="checkbox" name="" id={allUsers.id} className="dropdown_checkbox" onChange={handlerUser}/>
                                <label htmlFor={allUsers.id} className="dropdown_label">{allUsers.username}</label>
                            </li>))}
                        </ul>
                    </li>
                    <li className="task-list_item status">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            ????????????
                        </button>
                        <ul className="dropdown_content">
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="opened" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="opened" className="dropdown_label">??????????????</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="inProgress" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="inProgress" className="dropdown_label">?? ????????????</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="testing" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="testing" className="dropdown_label"> ??????????????????????</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="complete" className="dropdown_checkbox" onChange={handlerStatus}/>
                                <label htmlFor="complete" className="dropdown_label"> ??????????????</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item priority">
                        <button className="dropdown_btn" onClick={handlerShow}>
                            ??????????????????
                        </button>
                        <ul className="dropdown_content">
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="low" className="dropdown_checkbox" onChange={handlerRank}/>
                                <label htmlFor="low" className="dropdown_label">????????????</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="medium" className="dropdown_checkbox" onChange={handlerRank}/>
                                <label htmlFor="medium" className="dropdown_label">??????????????</label>
                            </li>
                            <li  className="dropdown_item">
                                <input type="checkbox" name="" id="high" className="dropdown_checkbox" onChange={handlerRank}/>
                                <label htmlFor="high" className="dropdown_label"> ??????????????</label>
                            </li>
                        </ul>
                    </li>
                    <li className="task-list_item edit">
                        <button type="submit" className="button button_primary">??????????????????</button>
                    </li>
                </ul>
            </form>
        </section>
        </>
    )
})

export default TaskListForm

/*
                            */