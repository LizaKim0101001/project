import {  makeAutoObservable } from "mobx";
import  api from "../api";

class Tasks{
    allData = [];
    filterData = [];
    task = [];
    total = 0
    taskCreateEdit = {
        id: "",
        userId: "",
        assignedId: "",
        title: "",
        description: "",
        type: "",
        rank: ""
      }
    taskFilter = {
        filter: {
          query: "",
          assignedUsers: [
          ],
          userIds: [
          ],
          type: [
          ],
          status: [
          ],
          rank: [
          ]
        },
        page: 0,
        limit: 0,
      };
    workTime = {
        timeInMinutes: 0,
        comment: "",
        currentUser: ""
      }

    constructor(){
        makeAutoObservable(this, {},{
            autoBind: true,

    })}

    async filterTasks(body){
        const response = await api.getFilterTasks(body)
        this.filterData = response
        this.total = response.total
    }
    async oneTask(id){
        const response = await api.getOneTask(id);
        this.task = response;
    }
    async createEditTasks(body){
        await api.createEditTask(body)
    }
    async deleteTask(id){
        await api.deleteOneTask(id)
    }
    async shangeStatus(id, status){
       await api.changeStatusTask(id, status)
    }
    async workTimeTask(id, body){
        await api.changeWorktimeTask(id, body)
    }
}
export const tasks = new Tasks();