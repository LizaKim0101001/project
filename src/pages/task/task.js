import React from "react";
import Header from "../../components/header/header";
import CardHeader from "../../components/card-header/card-header";
import TaskDescription from "../../components/task-description/task-description";
import {tasks} from "../../store/tasks"
import { useParams} from "react-router-dom";
import {observer} from "mobx-react";
import { comments } from "../../store/comment";
import { users } from "../../store/users";

const Task = observer(()=>{
    const edit = false;
    const {id} = useParams()
    async function fetch() {
        await tasks.oneTask(id);
        await comments.comments(id)
        await users.users()
        await users.login(users.userLoginData)
    }
        fetch()
    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader edit ={edit}/>
                <TaskDescription id={id}/>
            </section>
        </>
    )
})
export default Task

/*
    

*/