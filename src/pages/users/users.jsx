import React from "react";
import Header from "../../components/header/header";
import UserList from "../../components/user-list/user-list";
import {observer} from "mobx-react";
import Pagination from "../../components/pagination/pagination.jsx";
import { users } from "../../store/users";
const Users = observer(()=> {
    async function fetch() {
       await users.users()
       await users.login(users.userLoginData)
        
    }
    fetch()
    return(
        <>
        <Header/>
        <section className="board">
            <UserList />
            <Pagination />
        </section>
        </>
    )
})

export default Users