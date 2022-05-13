import React from "react";
import Header from "../../components/header/header";
import UserList from "../../components/user-list/user-list";
import {observer} from "mobx-react";
import { tasks } from "../../store";
import Pagination from "../../components/pagination/pagination.jsx";
import { useState } from "react";

const Users = observer(()=> {
    const total = tasks.allUsers.length
    const [currentPage, setCurrentPage] = useState(0)
    const userPerPage = 10
    const pages = Math.ceil(total/userPerPage)
    tasks.userFilter.page = currentPage
    tasks.userFilter.limit = userPerPage
    tasks.getFilterUsers(tasks.userFilter)
    
    return(
        <>
        <Header/>
        <section className="board">
            <UserList/>
            <Pagination currentPage = {currentPage} setCurrentPage = {setCurrentPage} total = {total} userPerPage={userPerPage} pages = {pages}/>
        </section>
        </>
    )
})

export default Users