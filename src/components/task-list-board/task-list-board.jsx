import React from "react";
import { tasks } from "../../store";
import {observer} from "mobx-react";
import TaskItem from "../task-item/task-item";

const TaskListBoard = observer(()=>{
    const {filterData} = tasks

    return(
        <>
        <section className="table">
            <table className="table">
                <tbody>
                    {filterData.map(filterData => <TaskItem {...filterData} key={filterData.id} />)}
                </tbody>
            </table>
        </section>
        </>
    )
})

export default TaskListBoard