import axios from 'axios';
const API_URL = 'https://intotu-test.winfad.com/api/';

const login = (email, password) => {
  const data = {
    email : email,
    password : password
  }

  const headers = {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer ' + token
  }

  return axios
    .post(`${API_URL}login`, data ,{
      headers: headers,
      body: JSON.stringify(data)
    })
    .then((response) => {
      if (response.data.auth.accessToken){
        localStorage.setItem("auth", JSON.stringify(response.data.auth))
      }
      return response.data.auth;
    })
}

const logout = () => {
  localStorage.removeItem("auth")
}

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("auth"))
}

export default {login, logout, getCurrentUser}