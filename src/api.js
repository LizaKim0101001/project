import axios from "axios";
const taskUrl = "http://93.95.97.34/api/tasks";
const userUrl = "http://93.95.97.34/api/users";
const commentUrl = "http://93.95.97.34/api/comments";

axios.interceptors.response.use(
  (res) => res,
  (err) => Promise.reject(err),
)
const api = {

    //task
//получаем все таски
    getAllTasks: async ()=>{
      try {
        const res = await axios.post(`${taskUrl}`, { filter: {}, page: 0, limit: 0 });
        return res.data
      } catch (error) {
          console.log(error);
      }
    },
    //фильтрация
    getFilterTasks: async (body)=>{
      try {
        const res = await axios.post(`${taskUrl}`, body);
        return res.data
      } catch (error) {
          console.log(error);
      }
    },
    //получаем 1 таску
    getOneTask: async (id)=>{
      try {
        const res = await axios.get(`${taskUrl}/${id}`);
        return res.data;
      } catch (error) {
          console.log(error);
      }
    },
    //удаляем таску
   deleteOneTask: async (id)=>{
      try {
        const res = await axios.delete(`${taskUrl}/${id}`);
        return res;
      } catch (error) {
          console.log(error);
      }
    },
    //меняем статус 
    changeStatusTask: async (id, status)=>{
      try {
        const res = await axios.patch(`${taskUrl}/${id}/status/${status}` );
        return res;
      } catch (error) {
          console.log(error);
      }
    },
    //меняем время работы
    changeWorktimeTask: async (id, body)=>{
      try {
        const res = await axios.patch(`${taskUrl}/${id}/worktime`, body);
        return res;
      } catch (error) {
          console.log(error);
      }
    },
    //редактируем/создаем новую таску 
    createEditTask: async (body)=>{
      try {
        const res = await axios.put(`${taskUrl}/createOrEdit`, body);
        return res;
      } catch (error) {
          console.log(error);
      }
    },

    //users
    postLogin: async (body)=>{
      try {
      const result = await axios.post(`${userUrl}/login`, body);
      return result;
      } catch (error) {
        return error.response;
      }
    },
    //получение всех пользователей
    getAllUsers: async ()=>{
      try {
      const result = await axios.get(`${userUrl}/all`);
      return result
      } catch (error) {
        console.log(error);
      }
    },
    //получение пользователя по id
    getOneUsers: async (id)=>{
      try {
      const result = await axios.get(`${userUrl}/${id}`);
      return result;
      } catch (error) {
        console.log(error);
      }
    },
    //редактирование пользователя
    putEditUsers: async (body)=>{
      try {
      const result = await axios.put(`${userUrl}/edit`, body);
      return result;
      } catch (error) {
        console.log(error);
      }
    },

    //получение списка пользователей по фильтру
    getFilterUsers: async (body)=>{
      try {
      const result = await axios.post(`${userUrl}`, body);
      return result.data
      } catch (error) {
        console.log(error);
      }
    },


    //удаление пользователя
    deleteUsers: async (id)=>{
      try {
      const result = await axios.delete(`${userUrl}/${id}`);
      return result;
      } catch (error) {
        console.log(error);
      }
    },


    //comments
    //получение комметнариев оп id задачи
    getAllComments: async (id)=>{
      try {
      const result = await axios.get(`${commentUrl}/${id}`);
      return result.data;
      } catch (error) {
        console.log(error);
      }
    },
    //Создаение или редактирование комментария
    createEditComments: async (body)=>{
      try {
      const result = await axios.put(`${commentUrl}/createOrEdit`, body);
      return result;
      } catch (error) {
        console.log(error);
      }
    },
    //Удаление комментария по id
    deleteComments: async (id)=>{
      try {
      const result = await axios.delete(`${commentUrl}/${id}`);
      return result;
      } catch (error) {
        console.log(error);
      }
    },
}

    export default api;


/*

    const request = async (url, method = 'GET', body) => {
        const response = await fetch(url, {
          method,
          body: JSON.stringify(body),
          headers: new Headers({
            'Content-type': 'application/json'
          })
        });
      
        return await response.json();
      }
      
    export const getAllTasks = ()=>{
          return request(`${baseUrl}tasks`, "POST", { filter: {}, page: 0, limit: 0 })
      }
    export const postLogin = (data)=>{
      return request(`${baseUrl}users/login`, "POST", {login: "Sloth123", password: "123"})
    } 
    
    
    //task
    //получаем все таски
    export const getAllTasks = async ()=>{
      try {
        const res = await axios.post(`${taskUrl}`, { filter: {}, page: 0, limit: 0 });
        return res.data
      } catch (error) {
          console.log(error);
      }
    }
    //фильтрация
    export const getFilterTasks = async (body)=>{
      try {
        const res = await axios.post(`${taskUrl}`, body);
        return res.data.data
      } catch (error) {
          console.log(error);
      }
    }
    //получаем 1 таску
    export const getOneTask = async (id)=>{
      try {
        const res = await axios.get(`${taskUrl}/${id}`);
        return res.data;
      } catch (error) {
          console.log(error);
      }
    }
    //удаляем таску
    export const deleteOneTask = async (id)=>{
      try {
        const res = await axios.delete(`${taskUrl}/${id}`);
        return res;
      } catch (error) {
          console.log(error);
      }
    }
    //меняем статус 
    export const changeStatusTask = async (id, status)=>{
      try {
        const res = await axios.patch(`${taskUrl}/${id}/status/${status}` );
        return res;
      } catch (error) {
          console.log(error);
      }
    }
    //меняем время работы
    export const changeWorktimeTask = async (id, worktime)=>{
      try {
        const res = await axios.patch(`${taskUrl}/${id}/worktime`, worktime);
        return res;
      } catch (error) {
          console.log(error);
      }
    }
    //редактируем/создаем новую таску 
    export const createEditTask = async (body)=>{
      try {
        const res = await axios.put(`${taskUrl}/createOrEdit`, body);
        return res;
      } catch (error) {
          console.log(error);
      }
    }

    //users
    export const postLogin = async ()=>{
      try {
      const result = await axios.post(`${userUrl}/login`, {login:"Sloth123", password:"123"});
      return result;
      } catch (error) {
        console.log(error);
      }
    }
    //получение всех пользователей
    export const getAllUsers = async ()=>{
      try {
      const result = await axios.get(`${userUrl}/all`);
      return result
      } catch (error) {
        console.log(error);
      }
    }
    //получение пользователя по id
    export const getOneUsers = async (id)=>{
      try {
      const result = await axios.get(`${userUrl}/${id}`);
      return result;
      } catch (error) {
        console.log(error);
      }
    }
    //редактирование пользователя
    export const editUsers = async (body)=>{
      try {
      const result = await axios.put(`${userUrl}/edit`, body);
      return result;
      } catch (error) {
        console.log(error);
      }
    }

    //получение списка пользователей по фильтру
    export const getFilterUsers = async (body)=>{
      try {
      const result = await axios.post(`${userUrl}`, body);
      return result.data.data
      } catch (error) {
        console.log(error);
      }
    }


    //удаление пользователя
    export const deleteUsers = async (id)=>{
      try {
      const result = await axios.delete(`${userUrl}/${id}`);
      return result;
      } catch (error) {
        console.log(error);
      }
    }


    //comments
    //получение комметнариев оп id задачи
    export const getAllComments = async (id)=>{
      try {
      const result = await axios.get(`${commentUrl}/${id}`);
      return result.data;
      } catch (error) {
        console.log(error);
      }
    }
    //Создаение или редактирование комментария
    export const createEditComments = async (body)=>{
      try {
      const result = await axios.put(`${commentUrl}/createOrEdit`, body);
      return result;
      } catch (error) {
        console.log(error);
      }
    }
    //Удаление комментария по id
    export const deleteComments = async (id)=>{
      try {
      const result = await axios.delete(`${commentUrl}/${id}`);
      return result;
      } catch (error) {
        console.log(error);
      }
}*/