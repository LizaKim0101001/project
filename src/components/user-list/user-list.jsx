import React from "react";
import { useNavigate } from "react-router-dom";
import {AppLinks} from "../../const.js";
import {observer} from "mobx-react";
import { users } from "../../store/users.js";

function UserItem({username, id}) {
    let navigate = useNavigate()
    const handlerProfile = ()=>{
        navigate(`${AppLinks.PROFILE}${id}`)
    }
    return(
        <tr className="table_list" onClick={handlerProfile}>
            <td className="table_item">
                <p className="table-cell">{username}</p>
            </td>
        </tr>
    )
}

const UserList = observer(()=> {
    const {filterUsers} = users
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