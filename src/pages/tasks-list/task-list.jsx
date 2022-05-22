import React from "react";
import Header from "../../components/header/header";
import CardHeader from "../../components/card-header/card-header";
import TaskListBoard from "../../components/task-list-board/task-list-board";
import TaskListForm from "../../components/task-list-form/task-list-form";
import {observer} from "mobx-react";
import Pagination from "../../components/pagination/pagination";
import { users } from "../../store/users";
import { tasks } from "../../store/tasks";


const TaskList = observer(()=>{
    async function fetch (){
        await users.users()
        await tasks.filterTasks(tasks.taskFilter)
        await users.login(users.userLoginData)
    
    }
        fetch()
    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader/>
                <TaskListForm />
                <TaskListBoard/>
                <Pagination />
            </section>
        </>
    )
});

export default TaskList

/*


    useEffect(()=>{
        users.users()
        tasks.filterTasks(tasks.taskFilter)
        users.login(users.userLoginData)
    })
    */