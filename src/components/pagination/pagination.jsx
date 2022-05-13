import React from "react";
import {observer} from "mobx-react";



const Pagination = observer(({total, pages, setCurrentPage, currentPage})=> {

    const pageNumbers = []
    for (let i = 1; i <= pages ; i++) {
        pageNumbers.push(i)
    }    
    const btnNext = document.querySelector("#next")
    const btnPrev = document.querySelector("#prev")

    const checkBtn = (page)=>{
        console.log(page, pages);
        if (page <= 0) {
            btnPrev.classList.add("button_disabled")
            btnPrev.setAttribute("disabled", true)
        }
        if (page > 0) {
            btnPrev.classList.remove("button_disabled")
            btnPrev.setAttribute("disabled", false)
        }
        if (page < pages) {
            btnNext.classList.remove("button_disabled")
            btnNext.setAttribute("disabled", true)
        } 
        if (page === pages -1) {
            btnNext.classList.add("button_disabled")
            btnNext.setAttribute("disabled", false)
        }
    }
    const paginate = (pageNumbers)=>{
        checkBtn(pageNumbers)
        setCurrentPage(pageNumbers)
    }
    
    const nextPage = ()=>{
        checkBtn (currentPage + 1)
        setCurrentPage(currentPage + 1)
    }
    const prevPage = ()=>{
        checkBtn (currentPage - 1)
        setCurrentPage(currentPage - 1)
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
                Показано {} - {} из {total}
            </div>
        </section>
        </>
    )
})
export default Pagination