import React from "react";
import Header from "../../components/header/header";
import ProfileBoard from "../../components/profile/profile-board";
import CardHeader from "../../components/card-header/card-header";
import {observer} from "mobx-react";
import { users } from "../../store/users";
import { useParams} from "react-router-dom";
import { tasks } from "../../store/tasks";

const Profile = observer(()=>{
    const {id} = useParams()
    async function fetch (){
        await users.users()
        await users.getOneUserData(id)
        await users.login(users.userLoginData)
        tasks.taskFilter.filter.assignedUsers = id
        await tasks.filterTasks(tasks.taskFilter)
    }
        fetch()

    return(
        <>
            <Header/>
            <section className="board">
                <CardHeader/>
                <ProfileBoard/>
            </section>
        </>
    )
})

export default Profile