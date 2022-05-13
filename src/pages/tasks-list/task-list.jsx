import React from "react";
import Header from "../../components/header/header";
import CardHeader from "../../components/card-header/card-header";
import TaskListBoard from "../../components/task-list-board/task-list-board";
import TaskListForm from "../../components/task-list-form/task-list-form";
import {observer} from "mobx-react";
import Pagination from "../../components/pagination/pagination";
import { useState } from "react";
import {tasks} from "../../store/index.js" ;

const TaskList = observer(()=>{
    const total = tasks.allData.length
    const [currentPage, setCurrentPage] = useState(0)
    const userPerPage = 10
    const pages = Math.floor(total/userPerPage)
    tasks.taskFilter.page = currentPage
    tasks.taskFilter.limit = userPerPage
    tasks.getFilterTasks(tasks.taskFilter)
    
    
    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader/>
                <TaskListForm/>
                <TaskListBoard/>
                <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} total = {total} userPerPage={userPerPage} pages = {pages} />
            </section>
        </>
    )
});

export default TaskList