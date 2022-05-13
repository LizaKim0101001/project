import React from "react";
import Header from "../../components/header/header";
import CardHeader from "../../components/card-header/card-header";
import TaskDescription from "../../components/task-description/task-description";
import {observer} from "mobx-react";
import {tasks} from "../../store/index"
import { useParams} from "react-router-dom";

const Task = observer(()=>{
    const {id} = useParams()
    tasks.getOneTask(id);
    const edit = false;

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