import React from "react";
import CardHeader from "../card-header/card-header";
//import TaskListForm from "../task-list-form/task-list-form";
//import TaskListBoard from "../task-list-board/task-list-board";
//import Pagination from "../pagination/pagination";
//import TaskInformation from "../task-imformation/task-imformation";
//import TaskEdit from "../task-edit/task-edit";
//import UserList from "../user-list/user-list";
import Profile from "../profile/profile-board";
export default function Board () {
    return(
        <section className="board">
            <CardHeader/>
            <Profile/>
        </section>
    )
}
//<Pagination/>
//<TaskListForm/>