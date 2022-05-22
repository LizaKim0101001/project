import React from "react";
import Header from "../../components/header/header";
import CardHeader from "../../components/card-header/card-header";
import EditTask from "../../components/edit-task/edit-task";
import {tasks} from "../../store/tasks"
import {observer} from "mobx-react";
import { useParams} from "react-router-dom";
import { comments } from "../../store/comment";
import { users } from "../../store/users";
 
const TaskEdit = observer(()=>{
    const edit = true;
    const {id} = useParams()
    async function fetch() {
        if (id) {
            tasks.oneTask(id);
        }
        await comments.comments(id)
        await users.users()
        await users.login(users.userLoginData)
    }
    fetch()
    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader edit = {edit}/>
                <EditTask/>
            </section>
        </>
    )
})

export default TaskEdit