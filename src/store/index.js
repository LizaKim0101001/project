import {  makeAutoObservable, onBecomeObserved } from "mobx";
import { getAllTasks, postLogin, getFilterTasks, getOneTask, getAllUsers, getFilterUsers } from "../api";

class Tasks{
    allData = [];
    userData = [];
    filterData = [];
    oneTask = [];
    allUsers = [];
    filterUsers = [];
    pages = 0;
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
    userFilter = {
          filter: {
            query: ""
          },
          page: 0,
          limit: 0
        }
    constructor(){
        makeAutoObservable(this, {},{
            autoBind: true,

        })
        onBecomeObserved(this, "allUsers", this.getAllUsers)
        onBecomeObserved(this, 'filterData', this.fetch)
        onBecomeObserved(this, 'userData', this.postLogin)
    }
    *fetch() {
        const response = yield getAllTasks();
        this.allData = response;
        this.filterData = response;
      }
    *postLogin(){
        const response = yield postLogin();
        this.userData = response.data
    }
    *getFilterTasks(body){
        const response = yield getFilterTasks(body)
        this.filterData = response;
    }
    *getOneTask(id){
        const response = yield getOneTask(id);
        this.oneTask = response;
    }
    *getAllUsers(){
        const response = yield getAllUsers()
        this.allUsers = response
        this.filterUsers = response
    }
    *getFilterUsers(body){
        const response = yield getFilterUsers(body);
        this.filterUsers = response
    }

}
export const tasks = new Tasks();
