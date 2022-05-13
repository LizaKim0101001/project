import React from "react";
import Header from "../../components/header/header";
import CardHeader from "../../components/card-header/card-header";
import EditTask from "../../components/edit-task/edit-task";
import {tasks} from "../../store/index"
import {observer} from "mobx-react";
import { useParams} from "react-router-dom";

const TaskEdit = observer(()=>{
    const {id} = useParams()
    tasks.getOneTask(id);
    const edit = true;
    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader edit = {edit}/>
                <EditTask id = {id} />
            </section>
        </>
    )
})

export default TaskEdit