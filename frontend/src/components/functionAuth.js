import React from 'react'
import axios from 'axios'
export const register = (newUser) => {
    return axios.post('/api/v1/users/register', newUser)
    .then(res => console.log(res)
    ).catch(err => console.log(err))
}
export const login = (user)=>{
    return axios.post('/api/v1/users/login' , user)
    .then(token =>{
            console.log(token)
        localStorage.setItem('usertoken' , token.data)
        return token.data
    })
    .catch(err=>console.log(err))
}