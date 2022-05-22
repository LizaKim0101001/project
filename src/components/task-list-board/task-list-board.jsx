import React from "react";
import { tasks } from "../../store/tasks";
import {observer} from "mobx-react";
import TaskItem from "../task-item/task-item";

const TaskListBoard = observer(()=>{
    const {filterData} = tasks
    return(
        <>
        <section className="table-wrapper">
            <table className="table">
                <tbody>
                    {filterData.data &&
                    filterData.data.map(filterData => <TaskItem {...filterData} key={filterData.id} />)}
                </tbody>
            </table>
        </section>
        </>
    )
})

export default TaskListBoard