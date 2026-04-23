import API from "../services/api";

const login=async()=>{
    const res=await API.post('/auth/login',{
        email,
        password,
    });
    localStorage.setItem('token',res.data.token);
}