import React, {useState } from "react";
import {observer} from "mobx-react";
import {tasks} from "../../store/tasks" ;
import { useLocation } from "react-router-dom";
import { AppLinks } from "../../const.js";
import { users } from "../../store/users";

const Pagination = observer(()=> {
    const btnNext = document.querySelector("#next")
    const btnPrev = document.querySelector("#prev")

    const {pathname} = useLocation()
    const [currentPage, setCurrentPage] = useState(0)
    const userPerPage = 10
    let totals 
        if (pathname === AppLinks.USERS) {
           totals = users.allUsers.length
            users.userFilter.page = currentPage
            users.userFilter.limit = userPerPage
            users.filteredUsers(users.userFilter)

        } else{
            totals = tasks.total
            tasks.taskFilter.page = currentPage
            tasks.taskFilter.limit = userPerPage
            tasks.filterTasks(tasks.taskFilter)
        }
    
    const pages = Math.ceil(totals/userPerPage);
    const pageNumbers = []
    for (let i = 1; i <= pages ; i++) {
        pageNumbers.push(i)
    }    
    function paginate (pageNumbers){
        setCurrentPage(pageNumbers)
     }
     
     function nextPage (){
        setCurrentPage(currentPage +1)
     }
     function prevPage (){
        setCurrentPage(currentPage -1)
     }
     let firstOfPage = 1  + (currentPage  * userPerPage)
     let lastOfPage 
     if ((currentPage + 1) === pages) {
         lastOfPage  = totals
     } else {
         lastOfPage  = userPerPage * (currentPage +1 )
     }
     
     if (currentPage === 0 && btnPrev !== null) {
        btnPrev.classList.add("button_disabled")
        btnPrev.setAttribute("disabled", true)
     }
     if (currentPage > 0 && btnPrev !== null) {
        btnPrev.classList.remove("button_disabled")
        btnPrev.setAttribute("disabled", false)
        
     }
     if ((currentPage +1) < pages && btnNext!==null) {
        btnNext.classList.remove("button_disabled")
        btnNext.setAttribute("disabled", false)
     }
     if ((currentPage + 1) === pages && btnNext!==null) {
        btnNext.classList.add("button_disabled")
        btnNext.setAttribute("disabled", true)
     }
    return(
        <>
        <section className="pagination">
            <div className="pagination_button">
                <button onClick={()=>prevPage()} id="prev" className="pagination_item__next button">Назад</button>
                { pageNumbers.map(number =>(<button className="pagination_item button" key={number} onClick={()=>paginate(number-1)}>{number}</button>))}
                <button onClick={()=>nextPage()} id="next" className="pagination_item__next button">Вперед</button>
            </div>
            <div className="pagination_shown">
                Показано {firstOfPage} - {lastOfPage} из {totals}
            </div>
        </section>
        </>
    )
    })
export default Pagination