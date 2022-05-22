import {  makeAutoObservable} from "mobx";
import  api from "../api";
import { configure } from "mobx"

configure({
    enforceActions: "never",
}) 

class Users{
    userLoginData = {login: 'Sloth123', password: '123'}
    userData = [];
    allUsers = [];
    filterUsers = [];
    oneUser = []
    total = 0
    userForAssignId = []
    userFilter = {
          filter: {
            query: ""
          },
          page: 0,
          limit: 0
        }
    editProfile = {
        id: "",
        login: "",
        username: "",
        about: "",
        photoUrl: "",
        password: ""
      }
    constructor(){
        makeAutoObservable(this)
    }
    async users(){
        const response =  await api.getAllUsers()
        this.allUsers = response.data
    }
    async login(body){
       const response = await api.postLogin(body)
       if (response.status === 401) {
       } else{
            this.userData = response.data
       }
    }
    async filteredUsers(body){
        const response = await api.getFilterUsers(body);
        this.filterUsers = response.data
        this.total = response.total
    }
    async getOneUserData(id){
        const response = await api.getOneUsers(id)
        this.oneUser = response.data
    }
    async editUsers(body){
        await api.putEditUsers(body)
    }
    async deleteOneUser(id){
        await api.deleteUsers(id)
    }
}
export const users = new Users();
