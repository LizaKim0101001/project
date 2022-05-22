import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {AppLinks} from "../../const.js";
import Authorize from "../../pages/authorize/authorize";
import Profile from "../../pages/profile/profile";
import Task from "../../pages/task/task";
import TaskEdit from "../../pages/task-edit/task-edit";
import TaskList from "../../pages/tasks-list/task-list";
import Users from "../../pages/users/users";

export default function App() {  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={AppLinks.AUTHORIZE} element={<Authorize/>}/>
        <Route path={`${AppLinks.PROFILE}:id`} element={<Profile/>}/>
        <Route path={AppLinks.TASKLIST} element={<TaskList/>}/>
        <Route path={`${AppLinks.TASK}:id`} element={<Task/>}/>
        <Route path={`${AppLinks.TASKEDIT}:id`} element={<TaskEdit/>}/>
        <Route path={AppLinks.USERS} element={<Users/>}/>
        <Route path={`${AppLinks.TASKADD}`} element={<TaskEdit/>}/>
      </Routes>
    </BrowserRouter>
  );
}