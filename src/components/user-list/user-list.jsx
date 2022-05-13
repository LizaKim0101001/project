import React from "react";
import { useNavigate } from "react-router-dom";
import {AppLinks} from "../../const.js";
import {observer} from "mobx-react";
import { tasks } from "../../store/index.js";

function UserItem({username, id}) {
    let navigate = useNavigate()
    const handlerProfile = ()=>{
        navigate(`${AppLinks.PROFILE}${id}`)
    }
    return(
        <tr className="task-list_list" onClick={handlerProfile}>
            <td className="task-list_item">
                <p className="table-cell">{username}</p>
            </td>
        </tr>
    )
}

const UserList = observer(()=> {
    const {filterUsers} = tasks
    return(
        <section className="user-list">
            <table className="table">
                <tbody>
                    {filterUsers.map(filterUsers => <UserItem {...filterUsers} key={filterUsers.id} username ={filterUsers.username}/>)}
                </tbody>
            </table>
        </section>
    )
})
export default UserList