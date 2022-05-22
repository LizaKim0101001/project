import {  makeAutoObservable} from "mobx";
import  api from "../api";


class Comments{

    allComments = [];
    comentData = {
      id: "",
      taskId: "",
      userId: "",
      text: ""
    }
    constructor(){
        makeAutoObservable(this, {},{
            autoBind: true,

        })
    }
    
  async comments(id){
      const response = await api.getAllComments(id);
      this.allComments = response;
  }
  async createEditComment(body){
    await api.createEditComments(body);
  }
  async deleteComment(id){
    await api.deleteComments(id)
  }
}
export const comments = new Comments();
